import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Brand Line */}
        <div className="mb-8">
          <p className="text-lg font-medium font-montserrat">LandLow — Land Made Simple.</p>
        </div>

        {/* Links */}
        <div className="mb-8">
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link to="/" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Home
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/sell" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Sell
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/properties" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Buy Land
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/properties" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Properties
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/how-it-works" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              How It Works
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/faq" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              FAQ
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/get-notified" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Get Notified
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/recently-sold" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Recently Sold
            </Link>
            <span className="opacity-50">|</span>
            <Link to="/contact" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal & Impact Lines */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-3">
          <p className="text-xs opacity-80">
            © 2025 LandLow. All rights reserved.<br />
            LandLow is owned and operated by One World Trading LLC. In many cases, One World Trading LLC or an affiliated entity will appear as the buyer or seller of record on your deed and closing documents.
          </p>
          <p className="text-xs opacity-80">
            LandLow donates 5% of net profits annually to plant trees through One Tree Planted.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;