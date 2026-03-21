import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Star, Quote } from 'lucide-react'
import {
  FadeUp,
  SlideIn,
  ScaleIn,
  BounceIn,
} from '@/components/animations'
import { StatCard } from '@/components/stat-card'

export const metadata: Metadata = {
  title: 'Impact Stories - JOSUDDI Success Stories',
  description: 'Read inspiring success stories and testimonials from PWDs whose lives have been transformed through JOSUDDI programs.',
  openGraph: {
    title: 'Impact Stories - JOSUDDI Success Stories',
    description: 'Inspiring stories of PWDs transforming their lives through our programs.',
  },
}

export default function ImpactStories() {
  const stories = [
    {
      id: 1,
      name: 'John Ssempijja',
      disability: 'Hearing Impairment',
      program: 'Entrepreneurship Support',
      image: '/images/impact-story-1.jpg',
      imageAlt: 'John Ssempijja, successful PWD entrepreneur',
      story: "A young man with a hearing impairment, John struggled to find employment until he gained business skills and support through the initiative. Today, he runs a growing phone accessories business and earns a stable income.",
      impact: 'From unemployed to business owner earning UGX 1 million monthly and supporting his family',
      quote: 'JOSUDDI gave me hope when I had none. I now support my family with dignity.',
    },
    
    {
      id: 2,
      name: 'David Ssemwogerere',
      disability: 'intellectual Disability',
      program: 'Savings Groups (VSLA)',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'David Ssemwogerere addressing other PWDs in a community meeting',
      story: 'David faced severe discrimination due to his intellectual disability. Through our advocacy programs and vocational training, he learned horticultural skills. He now manages a community garden, grows vegetables for sale, and has become a PWD rights advocate in his village.',
      impact: 'Managing community garden, generates income from agriculture, and serves as a community advocate',
      quote: "My disability doesn't define me. JOSUDDI helped me see my potential.",
    },
    {
      id: 3,
      name: 'Margaret Kiiza',
      disability: 'Hearing Impairment',
      program: 'Disability Support & Skills Training',
      image: '/images/impact-story-3.jpg',
      imageAlt: 'Margaret standing a group of women smiling',
      story: "Margaret struggled to access credit due to her hearing disability and lack of collateral. Joining our VSLA transformed her access to finance. shee saved over UGX 1 million, accessed a loan, and started a tailoring business.",
      impact: 'Saved UGX 1M+, successfully running tailoring business, and trains other deaf PWDs in tailoring skills',
      quote: "I never thought I could save money. The VSLA group showed me that together, we are stronger.",
    },
   
    {
      id: 5,
      name: 'Fatima Nambi',
      disability: 'Multiple Disabilities — Blind & Deaf',
      program: 'Comprehensive Support Program',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'Fatima Nambi leading advocacy efforts in her community',
      story: 'Fatima faced the most severe marginalisation due to her multiple disabilities. Our intensive support included assistive device provision, specialised training, and income support. She now leads peer support groups for other PWDs with multiple disabilities and advocates for their inclusion.',
      impact: 'Leads peer support groups, trained in advocacy, supported 15+ PWDs with multiple disabilities',
      quote: 'Society said I was worthless. JOSUDDI showed me my true value.',
    },
    {
      id: 6,
      name: 'David Lubega',
      disability: 'Mobility Impairment',
      program: 'Entrepreneurship & Savings Groups',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'David Lubega at his phone repair business',
      story: 'David participated in both VSLA and entrepreneurship programs. He saved money through the group, accessed a startup loan, and established a phone repair business. His shop now employs 2 people and serves the entire community.',
      impact: 'Business owner, employs 2 people, monthly income UGX 200k+',
      quote: "JOSUDDI believed in me when I didn't believe in myself. Now I believe in others.",
    },
  ]

  const testimonials = [
    {
      author: 'Amina Namusoke',
      title: 'VSLA Group Leader',
      testimonial: "As a VSLA leader, I've seen how JOSUDDI's programs unite our community. The respect and dignity given to PWDs through these programs is unmatched.",
    },
    {
      author: 'Kakooza Ronald',
      title: 'Community Leader',
      testimonial: "JOSUDDI has brought remarkable change to our community. The stigma against PWDs has reduced significantly thanks to their awareness campaigns.",
    },
    {
      author: 'Waswa Peter',
      title: 'Healthcare Worker',
      testimonial: "I've witnessed the health improvements in our community since JOSUDDI's programs started. PWDs now have access to healthcare and psychological support.",
    },
  ]

  const stats = [
    { number: '1000+', label: 'PWDs Empowered', sub: 'and growing every month' },
    { number: '150+', label: 'Businesses Started', sub: 'by PWDs across Uganda' },
    { number: '30+', label: 'Active VSLAs', sub: 'across Kampala & Wakiso' },
    { number: '50+', label: 'Communities Reached', sub: 'and still expanding' },
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
            Real People. Real Change.
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.2s both' }}
          >
            Stories of Transformation
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.35s both' }}
          >
            Behind every statistic is a person who refused to be defined by their disability.
            These are their stories — told in their own words.
          </p>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <FadeUp className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Meet the People Behind the Numbers
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Every story here is real. Every number represents a life changed not by charity, but by community.
            </p>
          </FadeUp>

          <div className="space-y-12">
            {stories.map((story, i) => (
              <FadeUp key={story.id} delay={i * 80}>
                <article className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-2xl border border-border bg-muted/30 hover:border-primary hover:shadow-lg transition-all duration-300">

                  {/* Image */}
                  <SlideIn from="left" delay={i * 80}>
                    <div className="relative h-80 rounded-xl overflow-hidden border border-border">
                      <Image
                        src={story.image}
                        alt={story.imageAlt}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                        {story.program}
                      </span>
                    </div>
                  </SlideIn>

                  {/* Content */}
                  <SlideIn from="right" delay={i * 80 + 100} className="md:col-span-2">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-foreground mb-1">{story.name}</h2>
                      <p className="text-accent font-semibold text-sm">{story.disability}</p>
                    </div>

                    <blockquote className="flex gap-3 my-5">
                      <Quote size={20} className="text-accent shrink-0 mt-1" />
                      <p className="text-lg text-foreground italic leading-snug">{story.quote}</p>
                    </blockquote>

                    <p className="text-muted-foreground leading-relaxed mb-6">{story.story}</p>

                    <BounceIn delay={i * 80 + 200}>
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <h4 className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wide">
                          Impact Achieved
                        </h4>
                        <p className="text-muted-foreground text-sm">{story.impact}</p>
                      </div>
                    </BounceIn>
                  </SlideIn>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">What Others Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Community members, leaders, and healthcare workers share what they have witnessed.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="h-full p-8 rounded-xl border border-border bg-background hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <BounceIn key={j} delay={i * 120 + j * 60}>
                        <Star size={16} className="fill-primary text-primary" />
                      </BounceIn>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Our Collective Impact</h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Numbers that represent real lives, real families, real communities transformed.
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScaleIn key={stat.label} delay={i * 120} className="text-center">
                <StatCard number={stat.number} label={stat.label} />
                <p className="text-xs text-white/60 mt-1 italic">{stat.sub}</p>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ScaleIn>
        <CTASection
          title="Your Story Could Be Next"
          description="Are you a PWD looking for support? Or someone who wants to help create change? Join us today."
          buttons={[
            { label: 'Get Support', href: '/contact', variant: 'default' },
            { label: 'Explore Our Programs', href: '/programs', variant: 'outline' },
          ]}
        />
      </ScaleIn>

      <Footer />
    </div>
  )
}