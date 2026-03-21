import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Check } from 'lucide-react'
import {
  FadeUp,
  FadeIn,
  SlideIn,
  ScaleIn,
  BounceIn,
} from '@/components/animations'
import { ExpandableText } from '@/components/expandable-text'

export const metadata: Metadata = {
  title: 'About JOSUDDI - Our Story & Mission',
  description: 'Learn about JOSUDDI, founded in 2022 to empower PWDs in Kampala and Wakiso through advocacy, support, and community initiatives.',
  openGraph: {
    title: 'About JOSUDDI - Our Story & Mission',
    description: 'Learn about JOSUDDI, founded in 2022 to empower PWDs in Kampala and Wakiso through advocacy, support, and community initiatives.',
  },
}

export default function About() {
  const coreValues = [ { title: 'Inclusion', description: 'We are committed to creating an environment where people living with disabilities are fully included, respected, and given equal opportunities to participate in all aspects of society.', }, { title: 'Empowerment', description: 'We believe in the power of community and partnerships, working together with members, stakeholders, and society to create meaningful and inclusive change.', }, { title: 'Community', description: 'We believe in the power of community and partnerships, working together with members, stakeholders, and society to create meaningful and inclusive change.', }, { title: 'Self Reliance', description: 'We believe PWDs are not recipients of charity, they are agents of their own change. Everything we do builds independence, not dependency.', }, { title: 'Dignity', description: 'Every person with a disability deserves to be seen, valued, and included but not pitied. We measure our success by how many PWDs are happy and smiling', }, { title: 'Sustainability', description: 'We promote long-term, community-driven initiatives such as savings groups and entrepreneurship that create lasting impact beyond short-term support.', }, ]

  const disabilities = [
    'Physical Disabilities',
    'Visual Impairments',
    'Hearing Impairments',
    'Intellectual Disabilities',
    'Caretakers of Children with Disabilities',
    'Multiple Disabilities',
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border overflow-hidden relative">
        {/* Decorative blob */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <style>{`
            @keyframes heroFadeUp {
              from { opacity: 0; transform: translateY(36px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.1s both' }}
          >
            Our Story & Mission
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.3s both' }}
          >
            JOSUDDI is a grassroots initiative born from the lived experiences of Persons with Disabilities in Uganda — built by the community, for the community.
          </p>
        </div>
      </section>

      {/* ── BACKGROUND ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <SlideIn from="left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Background</h2>
            </SlideIn>
            <FadeUp delay={100}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                JOSUDDI — Joint Sustainable Development Disability Initiative — is a grassroots community organization founded in 2022 in Uganda. Our origin is not a boardroom decision. It grew from the real, lived experiences of Persons with Disabilities who came together under the Pilot Light Foundation's disability economic empowerment program and decided to take their futures into their own hands.
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small association of PWDs in Kampala and the surrounding metropolitan areas has grown into a movement of over 1,000 beneficiaries, organized across more than 30 Village Savings and Loan Associations (VSLAs) in Kampala, Nabweru, and Wakiso.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <SlideIn from="right">
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
            </SlideIn>
            <FadeUp delay={100}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work primarily in{' '}
                <strong className="text-foreground">Kampala, Nabweru and Wakiso districts</strong>,
                serving Persons with Disabilities across various disability types including:
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disabilities.map((disability, i) => (
                <FadeUp key={disability} delay={i * 80}>
                  <div className="flex gap-3">
                    <BounceIn delay={i * 80 + 100}>
                      <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                    </BounceIn>
                    <span className="text-muted-foreground">{disability}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SlideIn from="left">
              <div className="p-8 rounded-2xl border border-border bg-primary/5 border-l-4 border-l-primary h-full">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Uganda where people living with disabilities live independently, with dignity, equal opportunities, and an improved quality of life — happy and smiling.
                </p>
              </div>
            </SlideIn>
            <SlideIn from="right" delay={150}>
              <div className="p-8 rounded-2xl border border-border bg-card border-l-4 border-l-primary/40 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower people living with disabilities through sustainable income generation, capacity building, advocacy, and community-driven initiatives that promote inclusion, safety, and self-reliance.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Six principles that guide every decision we make and every community we serve.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <FadeUp key={value.title} delay={i * 100}>
                <div className="h-full p-6 rounded-xl border border-border bg-background border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <ExpandableText text={value.description} />
                  {/* <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p> */}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM WE ADDRESS ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Problem We Address</h2>
            </FadeUp>
            <FadeUp delay={100}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Persons with disabilities in Uganda are disproportionately affected by poverty. They face lower levels of education, poor health outcomes, limited employment opportunities, and higher poverty rates compared to the general population.
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Poverty itself deepens disability — through malnutrition, unsafe environments, lack of healthcare, and limited access to clean water and sanitation. JOSUDDI exists to break this cycle by building systems of self-reliance from the ground up.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ScaleIn>
        <CTASection
          title="Be Part of Our Mission"
          description="Whether you're a PWD seeking support or someone who wants to contribute to our cause, there's a place for you at JOSUDDI."
          buttons={[
            { label: 'Join Us', href: '/contact', variant: 'default' },
            { label: 'Learn Our Programs', href: '/programs', variant: 'outline' },
          ]}
        />
      </ScaleIn>

      <Footer />
    </div>
  )
}