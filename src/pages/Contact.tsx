    import { useState } from "react";
    import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import { useToast } from "@/hooks/use-toast";
    import emailjs from "@emailjs/browser"; 
    const Contact = () => {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const { toast } = useToast();

      const contactInfo = [
        {
          icon: Mail,
          label: "Email",
          value: "k.m.safirudin1409@gmail.com",
          href: "mailto:k.m.safirudin1409@gmail.com"
        },
        {
          icon: Phone,
          label: "Phone",
          value: "+91 8610088369",
          href: "tel:+918610088369"
        },
        {
          icon: MapPin,
          label: "Location",
          value: "Chennai, Tamil Nadu, India",
          href: "#"
        }
      ];

      const socialLinks = [
        {
          icon: Github,
          label: "GitHub",
          href: "https://github.com/Safirudin-1409",
          color: "hover:text-neutral-800"
        },
        {
          icon: Linkedin,
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/safirudin-k-m-477868257/",
          color: "hover:text-blue-600"
        }
      ];

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
          console.log(formData.name+" "+formData.email+" "+formData.message);
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,  // replace with your EmailJS service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your EmailJS template ID
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY     // replace with your EmailJS public key
          );

          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });

          setFormData({ name: "", email: "", message: "" });
        } catch (error) {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
          });
        } finally {
          setIsSubmitting(false);
        }
      };

      return (
        <div className="min-h-screen bg-neutral-50">
          {/* Hero Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-neutral-800 mb-6 fade-in">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl text-neutral-600 fade-in stagger-1">
                  Let's discuss your project and how we can work together to bring your ideas to life
                </p>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-16">
            <div className="flex justify-center container mx-auto px-6">
              <div className="max-w-xl w-full space-y-8">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="fade-in">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                      Let's Start a Conversation
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                      I'm always excited to discuss new opportunities, collaborate on interesting 
                      projects, or simply chat about technology and innovation. Feel free to reach 
                      out through any of the channels below.
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className={`card-modern group hover:border-primary/30 block transition-all duration-300 hover:scale-[1.02] fade-in stagger-${index + 1}`}
                      >
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">{info.label}</p>
                            <p className="text-lg font-semibold text-neutral-800 group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="fade-in stagger-4">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-4">Connect Online</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-medium ${social.color}`}
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="card-gradient fade-in stagger-5">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">Current Availability</h3>
                    <p className="text-neutral-600 mb-4">
                      I'm currently open to new opportunities and collaborations. Whether you're 
                      looking for a full-stack developer, need help with algorithms, or want to 
                      discuss innovative project ideas, I'd love to hear from you.
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                      <span className="text-success font-semibold">Available for new projects</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="card-gradient fade-in">
                  <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6">
                    I typically respond to all inquiries within 24 hours. For urgent matters, 
                    feel free to reach out directly via phone or LinkedIn.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">&lt; 24h</div>
                      <p className="text-neutral-600">Response Time</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                      <p className="text-neutral-600">Reply Rate</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">Available</div>
                      <p className="text-neutral-600">For Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default Contact;
