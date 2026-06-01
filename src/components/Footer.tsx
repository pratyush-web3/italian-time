import { Link, useLocation } from "wouter";
import { siteConfig } from "@/config/siteConfig";
import { Globe } from "lucide-react";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

export function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="font-serif tracking-widest text-xl text-primary-foreground">TEMPERINI</div>
              <div className="text-[0.6rem] tracking-[0.3em] text-accent mt-1">OROLOGI</div>
            </Link>
            <p className="text-sm text-secondary mb-6 font-serif italic">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-secondary/60">
              Fondata a Milano, {siteConfig.foundedYear}.
            </p>
          </div>

          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 text-primary-foreground/80 uppercase">Collezioni</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><Link href="/collezioni" className="hover:text-accent transition-colors">Milano</Link></li>
              <li><Link href="/collezioni" className="hover:text-accent transition-colors">Torino</Link></li>
              <li><Link href="/collezioni" className="hover:text-accent transition-colors">Venezia</Link></li>
              <li><Link href="/collezioni" className="hover:text-accent transition-colors">Amalfi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 text-primary-foreground/80 uppercase">Azienda</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><Link href="/chi-siamo" className="hover:text-accent transition-colors">Chi Siamo</Link></li>
              <li><Link href="/maestria" className="hover:text-accent transition-colors">Maestria Artigianale</Link></li>
              <li><Link href="/tecnologia" className="hover:text-accent transition-colors">Tecnologia</Link></li>
              <li><Link href="/testimonianze" className="hover:text-accent transition-colors">Testimonianze</Link></li>
              <li><Link href="/contatti" className="hover:text-accent transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 text-primary-foreground/80 uppercase">Contatti</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors text-sm">
                <FiInstagram size={20} />
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors text-sm">
                <FiFacebook size={20} />
              </a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors text-sm">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="/termini" className="hover:text-primary-foreground transition-colors">Termini di Utilizzo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
