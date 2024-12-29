interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
} 