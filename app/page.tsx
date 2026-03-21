
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { StatCard } from '@/components/stat-card'
import { Button } from '@/components/ui/button'
import { NewsletterForm } from '@/components/newsletter-form'
import { ArrowRight, Heart, Users, Award, BookOpen, Quote, ChevronRight } from 'lucide-react'
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  FloatingBadge,
  PulseRing,
  BounceIn,
} from '@/components/animations'

export const metadata: Metadata = {
  title: 'JOSUDDI - Empowering PWDs in Uganda',
  description: 'Supporting Persons with Disabilities in Kampala and Wakiso through advocacy, entrepreneurship, savings groups, and community initiatives.',
  openGraph: {
    title: 'JOSUDDI - Empowering PWDs in Uganda',
    description: 'Supporting Persons with Disabilities in Kampala and Wakiso through advocacy, entrepreneurship, savings groups, and community initiatives.',
    type: 'website',
  },
}

export default function Home() {
  const foundedYear = 2022
  const yearsOfImpact = new Date().getFullYear()-foundedYear
  const programs = [
    {
      icon: Heart,
      title: 'Savings Groups (VSLAs)',
      description: 'We mobilize people with disabilities into self-help groups where members save weekly, access revolving loans, and grow their financial independence together.',
      href: '/programs',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Users,
      title: 'Entrepreneurship Support',
      description: 'We nurture the culture of entrepreneurship among PWDs by providing training, mentorship, and access to capital to help PWDs start and grow their own businesses.',
      href: '/programs',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: Award,
      title: 'Advocacy & Awareness',
      description: 'We advocate for the rights, inclusion, and dignity of Persons with Disabilities in Uganda — shifting community mindsets, engaging local governments, and empowering PWDs to participate fully in social and economic life.',
      href: '/programs',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: BookOpen,
      title: 'Disability Support',
      description: 'We work to safeguard vulnerable individuals by providing assistive devices and directing assistance with healthcare, education, and livelihood support.',
      href: '/programs',
      color: 'bg-lime-100 text-lime-600',
    },
  ]

  const stats = [
    { number: '1000+', label: 'Beneficiaries Served', sub: 'and growing every month' },
    { number: '30+', label: 'Communities Reached', sub: 'across Kampala, Mukono & Wakiso' },
    { number: '200+', label: 'Active Members', sub: 'Women leading the majority' },
    { number: yearsOfImpact, label: 'Years of Impact', sub: 'of sustained change' },
  ]

  const stories = [
    {
      id: 1,
      name: 'John Ssempijja',
      category: 'Entrepreneurship',
      quote: 'Disability is not inability. I just needed an opportunity and support to prove myself.',
      description: ' A young man with a hearing impairment, John struggled to find employment until he gained business skills and support through the initiative. Today, he runs a growing phone accessories business and earns a stable income',
    },
    {
      id: 2,
      name: 'David Ssemwogerere',
      category: 'Advocacy',
      quote: 'I used to feel invisible. Now I speak at community meetings and people listen.',
      description: "David became a peer advocate after JOSUDDI's training and has since influenced inclusion in different communities.",
    },
    {
      id: 3,
      name: 'Margaret Kizza',
      category: 'Savings Groups',
      quote: 'The VSLA group is my family. We save together, grow together.',
      description: 'Margaret leads her VSLA group of 15 women, collectively saving over UGX 6M in one year.',
    },
  ]

  const partners = [
    'Pilot Light Foundation',
    'Uganda Disability Union',
    'Ministry of Gender',
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-br from-orange-50 via-amber-50 to-background overflow-hidden border-b border-border">
        {/* Animated blobs */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          style={{ animation: 'blobDrift1 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none"
          style={{ animation: 'blobDrift2 10s ease-in-out infinite' }}
        />
        <style>{`
          @keyframes blobDrift1 {
            0%, 100% { transform: translate(0,0) scale(1); }
            50%       { transform: translate(-20px,20px) scale(1.1); }
          }
          @keyframes blobDrift2 {
            0%, 100% { transform: translate(0,0) scale(1); }
            50%       { transform: translate(20px,-20px) scale(1.08); }
          }
          @keyframes heroFadeUp {
            from { opacity:0; transform:translateY(40px); }
            to   { opacity:1; transform:translateY(0); }
          }
        `}</style>

        <div className="container mx-auto px-4 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text — staggered entrance */}
            <div className="space-y-6">
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide"
                style={{ animation: 'heroFadeUp 0.6s ease 0.1s both' }}
              >
                Kampala Metropolitan Area, Uganda
              </span>
              <h1
                className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance"
                style={{ animation: 'heroFadeUp 0.7s ease 0.25s both' }}
              >
                Empowering <span className="text-primary">Persons with Disabilities</span> to Build Better Lives
              </h1>
              <p
                className="text-lg text-muted-foreground text-balance max-w-lg"
                style={{ animation: 'heroFadeUp 0.7s ease 0.4s both' }}
              >
                We are a community-driven initiative supporting people with disabilities in Kampala and surrounding areas through economic empowerment, advocacy, and inclusive development programs.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                style={{ animation: 'heroFadeUp 0.7s ease 0.55s both' }}
              >
                <PulseRing>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-base shadow-lg shadow-primary/20">
                    <Link href="/contact">
                      Get Involved <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </PulseRing>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
              <div
                className="flex items-center gap-3 pt-4"
                style={{ animation: 'heroFadeUp 0.7s ease 0.7s both' }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                      <Image src={`/images/impact-story-${i}.jpg`} alt="community member" width={32} height={32} className="object-cover object-top" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">1,000+</span> lives touched since 2022
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div
              className="relative"
              style={{ animation: 'heroFadeUp 0.9s ease 0.3s both' }}
            >
              <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image src="/images/hero-bg.jpg" alt="JOSUDDI community gathering" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <FloatingBadge className="absolute -bottom-6 -left-4 md:-left-8 bg-white dark:bg-card rounded-xl shadow-xl border border-border p-4 max-w-[260px]">
                <Quote size={18} className="text-primary mb-2" />
                <p className="text-sm text-foreground font-medium leading-snug">
                  "JOSUDDI didn't just give me money — they gave me knowledge and confidence."
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-semibold">— Judith, Bakery Owner</p>
              </FloatingBadge>

              <FloatingBadge className="absolute -top-4 -right-2 md:-right-6 bg-primary text-white rounded-xl shadow-xl p-4 text-center">
                <p className="text-2xl font-bold">85%</p>
                <p className="text-xs opacity-90 leading-tight">Business<br />survival rate</p>
              </FloatingBadge>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our programs are designed to empower PWDs and create lasting community change.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => {
              const IconComponent = program.icon
              return (
                <FadeUp key={program.title} delay={i * 100}>
                  <div className="group h-full p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <BounceIn delay={i * 100 + 200}>
                      <div className={`mb-5 p-3 w-fit rounded-xl ${program.color}`}>
                        <IconComponent size={24} />
                      </div>
                    </BounceIn>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                    <Link href={program.href} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                      Learn More <ChevronRight size={14} />
                    </Link>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover object-center" aria-hidden />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-white/80 max-w-xl mx-auto">Every number represents a life changed, a family uplifted, a community transformed.</p>
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

      {/* ── STORIES OF CHANGE ── */}
      <section className="w-full py-20 md:py-24 bg-orange-50/50 dark:bg-card/30">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Real People, Real Change</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stories of Change</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Behind every number is a person who was once told their disability was a limitation. These are the stories of those who proved otherwise.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <FadeUp key={story.id} delay={i * 150}>
                <div className="group h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={`/images/impact-story-${story.id}.jpg`}
                      alt={story.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      {story.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      <Quote size={16} className="text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium italic leading-snug">{story.quote}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1 font-semibold">{story.name}</p>
                    <p className="text-sm text-muted-foreground mb-5">{story.description}</p>
                    <Link href="/impact-stories" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                      Read Full Story <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400} className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/impact-stories">View All Stories <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="w-full py-12 border-y border-border bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-center text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-8">
              Trusted Partners & Supporters
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {partners.map((partner, i) => (
                <FadeUp key={partner} delay={i * 80}>
                  <span className="text-sm font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
                    {partner}
                  </span>
                </FadeUp>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="w-full py-16 bg-amber-50 dark:bg-card/40 border-b border-border">
        <div className="container mx-auto px-4">
         <NewsletterForm />
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Join Us in Creating Change"
        description="Your support helps us reach more PWDs and create lasting positive impact in Uganda."
        buttons={[
          { label: 'Donate Now', href: '/contact', variant: 'default' },
          { label: 'Partner With Us', href: '/contact', variant: 'outline' },
        ]}
      />

      <Footer />
    </div>
  )
}