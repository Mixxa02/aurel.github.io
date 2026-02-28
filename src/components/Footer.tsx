import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-grid section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold tracking-[0.15em] mb-4">AUREL</h3>
            <p className="body-sm">Timeless elegance, crafted with intention.</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {["New Arrivals", "Outerwear", "Knitwear", "Accessories"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="body-sm link-underline">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["Our Story", "Sustainability", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link to="/about" className="body-sm link-underline">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-4">Help</h4>
            <ul className="space-y-2.5">
              {["Shipping & Returns", "Size Guide", "Contact Us", "FAQ"].map((item) => (
                <li key={item}>
                  <span className="body-sm link-underline cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">© 2026 AUREL. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <span key={social} className="text-xs text-muted-foreground link-underline cursor-pointer tracking-wide">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
