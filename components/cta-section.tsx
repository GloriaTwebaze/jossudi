import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
  buttons?: Array<{
    label: string
    href: string
    variant?: 'default' | 'outline'
  }>
}

export function CTASection({ title, description, buttons }: CTASectionProps) {
  const defaultButtons = buttons || [
    { label: 'Donate Now', href: '/contact', variant: 'default' as const },
    { label: 'Partner With Us', href: '/contact', variant: 'outline' as const },
  ]

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary/10 to-accent/10 border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {defaultButtons.map((button, idx) => {
            const uniqueKey = button.label + '|' + button.href + '|' + idx
            return (
              <Button
                key={uniqueKey}
                asChild
                variant={button.variant || 'default'}
                size="lg"
                className={button.variant === 'default' ? 'bg-primary hover:bg-primary/90' : ''}
              >
                <Link href={button.href}>
                  {button.label}
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
