import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About JOSSUD - Our Story & Mission',
  description: 'Learn about JOSSUD, founded in 2022 to empower PWDs in Kampala and Wakiso through advocacy, support, and community initiatives.',
  openGraph: {
    title: 'About JOSSUD - Our Story & Mission',
    description: 'Learn about JOSSUD, founded in 2022 to empower PWDs in Kampala and Wakiso through advocacy, support, and community initiatives.',
  },
}

export default function About() {
  const coreValues = [
    {
      title: 'Inclusion',
      description: 'We believe every PWD deserves equal opportunities and representation in society.',
    },
    {
      title: 'Empowerment',
      description: 'We provide tools and resources for PWDs to take control of their futures.',
    },
    {
      title: 'Community',
      description: 'We build strong, supportive networks that celebrate our diversity.',
    },
    {
      title: 'Transparency',
      description: 'We operate with integrity and accountability in all our initiatives.',
    },
    {
      title: 'Innovation',
      description: 'We develop creative solutions to address the unique challenges PWDs face.',
    },
    {
      title: 'Sustainability',
      description: 'We build programs designed for long-term positive impact.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Story & Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            JOSSUD is dedicated to creating awareness and building support systems for Persons with Disabilities in Uganda.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Background</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              JOSSUD was founded in 2022 with a simple vision: to improve the lives of Persons with Disabilities in Uganda. We recognized that PWDs in our communities faced significant barriers to economic participation, social inclusion, and access to basic services.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Starting with just a handful of dedicated volunteers, we began working in Kampala and Wakiso to understand the real challenges faced by PWDs. Through conversations, research, and community engagement, we developed programs specifically designed to address these needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, JOSSUD has grown to serve over 1000 beneficiaries across multiple communities, but our core mission remains unchanged: to empower PWDs and create lasting, positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We work primarily in <strong>Kampala and Wakiso districts</strong>, serving Persons with Disabilities across various disability types including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Physical Disabilities', 'Visual Impairments', 'Hearing Impairments', 'Intellectual Disabilities', 'Psychosocial Disabilities', 'Multiple Disabilities'].map((disability) => (
                <div key={disability} className="flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{disability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Uganda where Persons with Disabilities enjoy full participation in society, economic opportunities, and dignified lives free from discrimination and marginalization.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create awareness about disability rights, provide practical support through savings groups and entrepreneurship programs, and advocate for policy changes that promote inclusion of PWDs in Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Be Part of Our Mission"
        description="Whether you're a PWD seeking support or someone who wants to contribute to our cause, there's a place for you at JOSSUD."
        buttons={[
          { label: 'Join Us', href: '/contact', variant: 'default' },
          { label: 'Learn Our Programs', href: '/programs', variant: 'outline' },
        ]}
      />

      <Footer />
    </div>
  )
}
