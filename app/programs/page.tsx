
import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FadeUp,
  FadeIn,
  SlideIn,
  ScaleIn,
  BounceIn,
} from '@/components/animations'
import { ProgramsTabs } from '@/components/programs-tabs'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Our Programs - JOSUDDI Disability Support Initiatives',
  description: 'Explore JOSUDDI programs: Savings Groups (VSLAs), Entrepreneurship Support, Advocacy & Awareness, and Disability Support initiatives for PWDs in Uganda.',
  keywords: 'disability support Uganda, PWD initiatives, VSLAs, entrepreneurship for disabled, disability awareness Uganda',
  openGraph: {
    title: 'Our Programs - Disability Support Initiatives',
    description: 'JOSUDDI programs supporting PWDs through savings groups, entrepreneurship, advocacy, and community initiatives.',
  },
}

export default function Programs() {
  
  const steps = [
    {
      number: '1',
      title: 'Reach Out',
      description: 'Contact us to discuss your needs or interests. We\'re here to help and answer any questions.',
    },
    {
      number: '2',
      title: 'Assessment',
      description: 'We conduct a brief assessment to understand your situation and connect you with the right program.',
    },
    {
      number: '3',
      title: 'Enrollment',
      description: 'Join our program and begin your journey toward empowerment and lasting change.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border overflow-hidden relative">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <style>{`
            @keyframes heroFadeUp {
              from { opacity: 0; transform: translateY(36px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            style={{ animation: 'heroFadeUp 0.6s ease 0.1s both' }}
          >
            What We Do
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.2s both' }}
          >
            Our Programs for PWDs in Uganda
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.35s both' }}
          >
            JOSUDDI supports over 1,000 PWDs across Kampala, Mukono, and Wakiso through savings groups,
            entrepreneurship training, advocacy, and direct disability support. Building lasting economic
            independence from the ground up.
          </p>
        </div>
      </section>

      {/* ── PROGRAMS TABS ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded-xl" />}>
      <ProgramsTabs />
    </Suspense>
        </div>
      </section>

      {/* ── HOW TO GET INVOLVED ── */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">How to Get Involved</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting started is simple. Three steps stand between you and a community that has your back.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 150}>
                <div className="group rounded-xl border border-border bg-background p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <BounceIn delay={i * 150 + 200}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </div>
                  </BounceIn>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ScaleIn>
        <CTASection
          title="Ready to Transform Your Life?"
          description="Join over 1,000 PWDs who have benefited from JOSUDDI programs. Contact us today to learn which program is right for you."
          buttons={[
            { label: 'Join Our Program', href: '/contact', variant: 'default' },
            { label: 'Read Success Stories', href: '/impact-stories', variant: 'outline' },
          ]}
        />
      </ScaleIn>

      <Footer />
    </div>
  )
}