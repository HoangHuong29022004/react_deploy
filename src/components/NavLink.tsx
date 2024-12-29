interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
    >
      {children}
    </a>
  )
} 