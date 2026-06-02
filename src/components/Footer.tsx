import { Link } from "wouter";
import { siteConfig } from "@/config/siteConfig";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <FooterLink href="/" className="inline-block mb-6">
              <div className="font-serif tracking-widest text-xl text-primary-foreground">
                TEMPERINI
              </div>
              <div className="text-[0.6rem] tracking-[0.3em] text-accent mt-1">
                OROLOGI
              </div>
            </FooterLink>

            <p className="text-sm text-secondary mb-6 font-serif italic">
              {siteConfig.tagline}
            </p>

            <p className="text-xs text-secondary/60">
              Fondata a Milano, {siteConfig.foundedYear}.
            </p>
          </div>

          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 text-primary-foreground/80 uppercase">
              Collezioni
            </h4>

            <ul className="space-y-3 text-sm text-secondary">
              {siteConfig.collections.map((collection) => (
                <li key={collection.name}>
                  <FooterLink
                    href={collection.href}
                    className="hover:text-accent transition-colors"
                  >
                    {collection.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 text-primary-foreground/80 uppercase">
              Azienda
            </h4>

            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <FooterLink
                  href="/chi-siamo"
                  className="hover:text-accent transition-colors"
                >
                  Chi Siamo
                </FooterLink>
              </li>

              <li>
                <FooterLink
                  href="/maestria"
                  className="hover:text-accent transition-colors"
                >
                  Maestria Artigianale
                </FooterLink>
              </li>

              <li>
                <FooterLink
                  href="/tecnologia"
                  className="hover:text-accent transition-colors"
                >
                  Tecnologia
                </FooterLink>
              </li>

              <li>
                <FooterLink
                  href="/testimonianze"
                  className="hover:text-accent transition-colors"
                >
                  Testimonianze
                </FooterLink>
              </li>

              <li>
                <FooterLink
                  href="/contatti"
                  className="hover:text-accent transition-colors"
                >
                  Contatti
                </FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 text-primary-foreground/80 uppercase">
              Contatti
            </h4>

            <ul className="space-y-3 text-sm text-secondary">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
            </ul>

            <div className="mt-6 flex space-x-4">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-accent transition-colors"
              >
                <FiInstagram size={20} />
              </a>

              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-accent transition-colors"
              >
                <FiFacebook size={20} />
              </a>

              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-accent transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. Tutti i
            diritti riservati.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink
              href="/privacy"
              className="text-primary-foreground/90 hover:text-accent transition-colors"
            >
              Privacy Policy
            </FooterLink>

            <FooterLink
              href="/termini"
              className="text-primary-foreground/90 hover:text-accent transition-colors"
            >
              Termini di Utilizzo
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}