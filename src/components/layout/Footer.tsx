import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-montserrat">LandLow</h3>
            <p className="text-sm opacity-90">Land Made Simple.</p>
            <div className="space-y-2">
              <a href="mailto:js@landlowusa.com" className="flex items-center space-x-2 text-sm hover:text-accent transition-colors">
                <Mail size={16} />
                <span>js@landlowusa.com</span>
              </a>
              <a href="tel:970-368-3208" className="flex items-center space-x-2 text-sm hover:text-accent transition-colors">
                <Phone size={16} />
                <span>970-368-3208</span>
              </a>
            </div>
          </div>

          {/* Buy */}
          <div>
            <h4 className="font-semibold font-montserrat mb-4">Buy Land</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/properties" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/how-buying-works" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  How Buying Works
                </Link>
              </li>
              <li>
                <Link to="/owner-financing" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Owner Financing
                </Link>
              </li>
              <li>
                <Link to="/reserve" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Reserve a Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Sell */}
          <div>
            <h4 className="font-semibold font-montserrat mb-4">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sell" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Get a Cash Offer
                </Link>
              </li>
              <li>
                <Link to="/how-selling-works" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  How Selling Works
                </Link>
              </li>
              <li>
                <Link to="/why-sell-to-us" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Why Sell to Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-montserrat mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  About LandLow
                </Link>
              </li>
              <li>
                <Link to="/environmental-impact" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Environmental Impact
                </Link>
              </li>
              <li>
                <Link to="/recently-sold" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Recently Sold
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 space-y-4">
          <p className="text-xs opacity-80">
            All transactions conducted through One World Trading LLC. Licensed real estate professionals facilitate all land transactions in accordance with state and federal regulations.
          </p>
          <p className="text-xs opacity-80">
            LandLow donates 5% of net profits annually to environmental conservation efforts focused on land preservation and restoration.
          </p>
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} LandLow / One World Trading LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;