import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "About", to: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-grid flex items-center justify-between h-16 sm:h-20">
        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Nav left */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline text-sm font-medium tracking-wider uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.15em]">
            AUREL
          </h1>
        </Link>

        {/* Cart right */}
        <Link to="/cart" className="relative p-2 -mr-2">
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-foreground text-background text-[10px] font-medium rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="sm:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-grid py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-lg font-medium tracking-wider uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
