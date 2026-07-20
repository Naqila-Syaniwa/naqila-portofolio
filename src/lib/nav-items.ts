export interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Contact', href: '/contact' },
];