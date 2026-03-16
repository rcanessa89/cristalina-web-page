import type { MappedLink } from '../lib/mapContent';

export interface NavigationProps {
  links: MappedLink[];
  locale?: string;
}

function MenuItems({ links }: { links: MappedLink[] }) {
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

  return (
    <nav className="navbar bg-primary text-primary-content shadow-lg sticky top-0 z-50">
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
            <MenuItems links={links} />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold tracking-wide" href={homeHref}>
          Cristalina
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuItems links={links} />
        </ul>
      </div>
    </nav>
  );
}
