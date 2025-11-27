export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "News", href: "/news" },
  { name: "About Us", href: "/about" },
];
