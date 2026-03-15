import type { MappedFooter } from '../lib/mapContent';
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
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <p className="text-lg font-bold">{companyName}</p>
          {description && <p className="max-w-xs">{description}</p>}
        </aside>
        {links && links.length > 0 && (
          <nav>
            <h6 className="footer-title">Links</h6>
            {links.map((link) => (
              <a key={link.id} href={link.url} className="link link-hover">
                {link.linkText}
              </a>
            ))}
          </nav>
        )}
        {hasContact && (
          <nav>
            <h6 className="footer-title">Contacto</h6>
            {phone && (
              <a href={`tel:${phone}`} className="link link-hover">
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="link link-hover">
                {email}
              </a>
            )}
            {address && <p>{address}</p>}
          </nav>
        )}
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content border-t border-neutral-content/10 px-10 py-4">
        <aside>
          <p>
            &copy; {new Date().getFullYear()} {companyName}
          </p>
        </aside>
        {hasSocial && (
          <nav>
            <div className="grid grid-flow-col gap-4">
              {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon className="hover:text-primary transition-colors" />
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon className="hover:text-primary transition-colors" />
                </a>
              )}
              {whatsapp && (
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon className="hover:text-primary transition-colors" />
                </a>
              )}
            </div>
          </nav>
        )}
      </footer>
    </>
  );
}
