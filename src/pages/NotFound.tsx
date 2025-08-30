import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn-hero inline-flex items-center justify-center px-8 py-4 text-decoration-none"
          >
            Return Home
          </Link>
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/about" className="text-primary hover:text-primary/80 transition-colors">
              About
            </Link>
            <Link to="/portfolio" className="text-primary hover:text-primary/80 transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
