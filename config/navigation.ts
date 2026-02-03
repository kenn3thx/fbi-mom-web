export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  description?: string;
  badge?: string;
  external?: boolean;
  requiredRoles?: string[];
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

// Main Header Navigation
export const MAIN_NAV: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
    description: 'Learn more about our company',
  },
  {
    name: 'Blog',
    href: '/blog',
    description: 'Read our latest blog posts',
  },
  {
    name: 'Pricing',
    href: '/pricing',
    description: 'View our pricing plans',
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with us',
  },
];

// Dashboard Navigation
export const DASHBOARD_NAV: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'Home',
  },
  {
    name: 'Profile',
    href: '/dashboard/profile',
    icon: 'User',
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: 'Settings',
  },
];

// Admin Navigation
export const ADMIN_NAV: NavigationItem[] = [
  {
    name: 'Overview',
    href: '/admin',
    icon: 'LayoutDashboard',
    requiredRoles: ['admin', 'super_admin'],
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: 'Users',
    description: 'Manage user accounts',
    requiredRoles: ['admin', 'super_admin'],
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: 'BarChart',
    description: 'View analytics and insights',
    requiredRoles: ['admin', 'super_admin'],
  },
  {
    name: 'Reports',
    href: '/admin/reports',
    icon: 'FileText',
    description: 'Generate and view reports',
    requiredRoles: ['admin', 'super_admin'],
  },
];

// Control Panel (Super Admin) Navigation
export const CPANEL_NAV: NavigationItem[] = [
  {
    name: 'System',
    href: '/cpanel',
    icon: 'Server',
    requiredRoles: ['super_admin'],
  },
  {
    name: 'Configuration',
    href: '/cpanel/system',
    icon: 'Settings',
    description: 'System configuration',
    requiredRoles: ['super_admin'],
  },
  {
    name: 'Permissions',
    href: '/cpanel/permissions',
    icon: 'Shield',
    description: 'Manage roles and permissions',
    requiredRoles: ['super_admin'],
  },
  {
    name: 'Audit Logs',
    href: '/cpanel/audit-logs',
    icon: 'FileCode',
    description: 'View system audit logs',
    requiredRoles: ['super_admin'],
  },
];

// Footer Navigation
export const FOOTER_NAV: NavigationSection[] = [
  {
    title: 'Product',
    items: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Status', href: '/status', external: true },
    ],
  },
  {
    title: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Licenses', href: '/licenses' },
    ],
  },
];

// Mobile Menu Navigation (Combined)
export const MOBILE_NAV = {
  public: MAIN_NAV,
  dashboard: DASHBOARD_NAV,
  admin: ADMIN_NAV,
  cpanel: CPANEL_NAV,
};

// User Menu Items
export const USER_MENU_ITEMS: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'Home',
  },
  {
    name: 'Profile',
    href: '/dashboard/profile',
    icon: 'User',
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: 'Settings',
  },
];

// Helper function to filter navigation by role
export function filterNavigationByRole(
  items: NavigationItem[],
  userRole?: string
): NavigationItem[] {
  if (!userRole) return items.filter((item) => !item.requiredRoles);

  return items.filter((item) => {
    if (!item.requiredRoles) return true;
    return item.requiredRoles.includes(userRole);
  });
}

// Helper to get icon component name
export function getIconName(iconName?: string): string {
  return iconName || 'Circle';
}