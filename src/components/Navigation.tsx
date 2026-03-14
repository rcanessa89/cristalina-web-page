import type { MappedLink } from '../lib/mapContent';

export interface NavigationProps {
  links: MappedLink[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="text-xl" href="/">
          Cristalina
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) =>
            link.children ? (
              <li key={link.id} className="w-max">
                <details>
                  <summary>{link.linkText}</summary>
                  <ul className="bg-base-100 rounded-t-none p-2 z-99">
                    {link.children.map((child) => (
                      <li key={child.id} className="w-max">
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
        </ul>
      </div>
    </nav>
  );
}
