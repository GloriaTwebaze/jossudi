'use client'

import { Button } from '@/components/ui/button'
import { ScaleIn } from '@/components/animations'

export function NewsletterForm() {
  return (
    <ScaleIn className="max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-foreground mb-2">Stay Connected</h3>
      <p className="text-muted-foreground mb-6">
        Get updates on our programs, success stories, and how you can make a difference.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 max-w-sm px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button type="submit" className="bg-primary hover:bg-primary/90 shrink-0">
          Subscribe
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
    </ScaleIn>
  )
}