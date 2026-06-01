import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Collezioni", path: "/collezioni" },
    { name: "Maestria", path: "/maestria" },
    { name: "Tecnologia", path: "/tecnologia" },
    { name: "Testimonianze", path: "/testimonianze" },
    { name: "Contatti", path: "/contatti" },
  ];

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-colors duration-500 border-b ${
    isScrolled || location !== "/" ? "bg-primary border-primary-foreground/10" : "bg-transparent border-transparent"
  }`;

  return (
    <header className={navClass} data-testid="navbar">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group cursor-pointer">
            <div className="flex flex-col items-center">
              <span className={`font-serif tracking-[0.2em] text-lg transition-colors ${isScrolled || location !== "/" ? "text-primary-foreground" : "text-white"}`}>
                TEMPERINI
              </span>
              <span className="text-[0.6rem] tracking-[0.4em] text-accent">OROLOGI</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full ${
                  isScrolled || location !== "/" ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-white/80 hover:text-white"
                } ${location === link.path ? "text-accent after:w-full" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} className={isScrolled || location !== "/" ? "text-white" : "text-white"} /> : <Menu size={24} className={isScrolled || location !== "/" ? "text-white" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-primary z-40 p-6 flex flex-col space-y-6">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-xl font-serif uppercase tracking-widest ${location === link.path ? "text-accent" : "text-primary-foreground"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
