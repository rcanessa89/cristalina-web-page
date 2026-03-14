type LinkObject = {
  label: string;
  href: string;
};

type LinkItem =
  | LinkObject
  | {
      label: string;
      children: LinkObject[];
    };

export interface NavigationProps {
  links: LinkItem[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          Cristalina
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) =>
            'href' in link ? (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ) : (
              <li key={link.label}>
                <details>
                  <summary>{link.label}</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
