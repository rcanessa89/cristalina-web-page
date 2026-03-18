import type { MappedLink } from '../lib/mapContent';
import { Globe } from 'lucide-react';

export interface NavigationProps {
  links: MappedLink[];
  locale?: string;
}

const linkClass = "relative hover:text-white transition-colors hover:bg-transparent after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all hover:after:w-4/5";

function DesktopLink({ link }: { link: MappedLink }) {
  if (link.children) {
    return (
      <li key={link.id}>
        <details>
          <summary className="hover:text-white transition-colors hover:bg-transparent">{link.linkText}</summary>
          <ul className="bg-base-100 text-base-content rounded-t-none p-2 z-99 shadow-lg w-max">
            {link.children.map((child) => (
              <li key={child.id}>
                <a href={child.url}>{child.linkText}</a>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li key={link.id}>
      <a href={link.url} className={linkClass}>
        {link.linkText}
      </a>
    </li>
  );
}

function MobileMenuItems({ links }: { links: MappedLink[] }) {
  return (
    <>
      {links.map((link) =>
        link.children ? (
          <li key={link.id}>
            <details>
              <summary>{link.linkText}</summary>
              <ul className="bg-base-100 text-base-content rounded-t-none p-2 z-99 shadow-lg w-max">
                {link.children.map((child) => (
                  <li key={child.id}>
                    <a href={child.url}>{child.linkText}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={link.id}>
            <a href={link.url}>{link.linkText}</a>
          </li>
        )
      )}
    </>
  );
}

export default function Navigation({ links, locale = 'es' }: NavigationProps) {
  const homeHref = locale === 'es' ? '/es/inicio' : '/en/home';
  const altLocale = locale === 'es' ? 'en' : 'es';
  const altLabel = locale === 'es' ? 'EN' : 'ES';
  const altHref = locale === 'es' ? '/en/home' : '/es/inicio';

  return (
    <nav className="navbar bg-secondary/95 backdrop-blur-sm text-secondary-content shadow-lg sticky top-0 z-50 border-b border-white/5 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-52 p-2 shadow-lg z-99"
          >
            <MobileMenuItems links={links} />
            <li>
              <a href={altHref} lang={altLocale} className="flex items-center gap-2">
                <Globe size={16} />
                {altLabel}
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold tracking-tight" href={homeHref}>
          Cristalina
        </a>
      </div>
      <div className="navbar-end hidden lg:flex items-center gap-1">
        <ul className="menu menu-horizontal px-1 text-white/70">
          {links.map((link) => (
            <DesktopLink key={link.id} link={link} />
          ))}
        </ul>
        <a
          href={altHref}
          lang={altLocale}
          className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors ml-3 px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30"
        >
          <Globe size={14} />
          {altLabel}
        </a>
      </div>
    </nav>
  );
}
