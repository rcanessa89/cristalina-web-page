import type { MappedFooter } from '../lib/mapContent';
import { Phone, Mail, MapPin } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Footer({
  companyName,
  description,
  links,
  email,
  phone,
  address,
  facebook,
  instagram,
  whatsapp
}: MappedFooter) {
  const hasSocial = facebook || instagram || whatsapp;
  const hasContact = email || phone || address;

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-2xl font-extrabold tracking-tight mb-3">{companyName}</p>
            {description && (
              <p className="text-neutral-content/60 leading-relaxed">{description}</p>
            )}
            {hasSocial && (
              <div className="flex gap-4 mt-6">
                {facebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-colors"
                  >
                    <FacebookIcon size={18} />
                  </a>
                )}
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-colors"
                  >
                    <InstagramIcon size={18} />
                  </a>
                )}
                {whatsapp && (
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-colors"
                  >
                    <WhatsAppIcon size={18} />
                  </a>
                )}
              </div>
            )}
          </div>

          {links && links.length > 0 && (
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-wider text-neutral-content/50 mb-4">
                Links
              </h6>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="text-neutral-content/70 hover:text-primary transition-colors">
                      {link.linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasContact && (
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-wider text-neutral-content/50 mb-4">
                Contacto
              </h6>
              <ul className="space-y-3">
                {phone && (
                  <li>
                    <a href={`tel:${phone}`} className="inline-flex items-center gap-3 text-neutral-content/70 hover:text-primary transition-colors">
                      <Phone size={16} /> {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="inline-flex items-center gap-3 text-neutral-content/70 hover:text-primary transition-colors">
                      <Mail size={16} /> {email}
                    </a>
                  </li>
                )}
                {address && (
                  <li className="inline-flex items-start gap-3 text-neutral-content/70">
                    <MapPin size={16} className="shrink-0 mt-1" /> {address}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-neutral-content/10 px-6 py-4">
        <p className="text-center text-sm text-neutral-content/40">
          &copy; {new Date().getFullYear()} {companyName}
        </p>
      </div>
    </footer>
  );
}
