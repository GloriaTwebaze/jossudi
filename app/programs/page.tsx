import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
  const programs = [
    {
      id: 'vslas',
      title: 'Savings Groups (VSLAs)',
      short: 'Village Savings and Loan Associations',
      overview: 'Community-led financial groups that help PWDs save money, access credit, and build financial independence.',
      image: '/images/vsla-program.jpg',
      imageAlt: 'Women and men in a VSLA savings group meeting, managing finances together',
      benefits: [
        'Safe savings mechanism without banking fees',
        'Access to emergency loans for health and education',
        'Training in financial literacy and business management',
        'Social support and peer mentoring',
        'Opportunity to build credit history',
      ],
      impact: 'Our VSLA members have collectively saved over UGX 50 million and accessed loans for health services, education, and business startups.',
      target: 'PWDs aged 18+, living in target communities',
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship Support',
      short: 'Business Training and Support',
      overview: 'We provide comprehensive support to help PWDs start, scale, and sustain income-generating businesses.',
      image: '/images/entrepreneurship.jpg',
      imageAlt: 'Person with disability running their own successful business',
      benefits: [
        'Business skills and entrepreneurship training',
        'Market linkages and business networking',
        'Mentorship from successful entrepreneurs',
        'Access to start-up capital through our funds',
        'Ongoing business coaching and support',
      ],
      impact: 'Over 150 PWDs have started sustainable businesses, generating over UGX 200 million in annual income.',
      target: 'PWDs with business ideas or existing businesses looking to grow',
    },
    {
      id: 'advocacy',
      title: 'Advocacy & Awareness',
      short: 'Disability Rights and Inclusion',
      overview: 'We conduct campaigns and initiatives to change mindsets, promote disability rights, and advocate for policy inclusion.',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'Community members and PWDs together in an awareness campaign',
      benefits: [
        'Community awareness campaigns on disability inclusion',
        'Disability rights training and advocacy workshops',
        'Policy engagement and government advocacy',
        'Media campaigns challenging disability stigma',
        'Youth leadership programs',
      ],
      impact: 'Our campaigns have reached 50+ communities and influenced local government policies on PWD inclusion.',
      target: 'General public, PWDs, community leaders, and policymakers',
    },
    {
      id: 'disability-support',
      title: 'Disability Support Initiatives',
      short: 'Direct Assistance Programs',
      overview: 'Direct support programs addressing critical needs of PWDs including healthcare, education, and livelihood assistance.',
      image: '/images/impact-story-3.jpg',
      imageAlt: 'PWD receiving training and support for skill development',
      benefits: [
        'Healthcare and assistive device support',
        'Education assistance and school supplies',
        'Vocational training and skills development',
        'Income support for destitute PWDs',
        'Rehabilitation and counseling services',
      ],
      impact: 'Provided healthcare to 200+ PWDs, supported 80 children with disabilities to attend school, trained 100+ PWDs in various skills.',
      target: 'Vulnerable and destitute PWDs in our communities',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Disability Support Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            JOSUDDI implements four comprehensive programs designed to empower PWDs and create sustainable community impact across Kampala and Wakiso.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="vslas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {programs.map((program) => (
                <TabsTrigger key={program.id} value={program.id}>
                  <span className="hidden sm:inline">{program.title.split(' ')[0]}</span>
                  <span className="sm:hidden text-xs">{program.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{program.title}</h2>
                  <p className="text-lg text-accent font-semibold mb-6">{program.short}</p>

                  <div className="relative h-80 rounded-lg overflow-hidden mb-8 border border-border">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Overview</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{program.overview}</p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-6">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary flex-shrink-0 text-sm font-semibold">
                          ✓
                        </span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="p-6 rounded-lg border border-border bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">Our Impact</h4>
                      <p className="text-muted-foreground">{program.impact}</p>
                    </div>
                    <div className="p-6 rounded-lg border border-border bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">Target Beneficiaries</h4>
                      <p className="text-muted-foreground">{program.target}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How to Participate */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg border border-border bg-background p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Reach Out</h3>
              <p className="text-muted-foreground">
                Contact us to discuss your needs or interests. We're here to help and answer any questions.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Assessment</h3>
              <p className="text-muted-foreground">
                We conduct a brief assessment to understand your situation and connect you with the right program.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Enrollment</h3>
              <p className="text-muted-foreground">
                Join our program and begin your journey toward empowerment and change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Life?"
        description="Join thousands of PWDs who have benefited from JOSUDDI programs. Contact us today to learn which program is right for you."
        buttons={[
          { label: 'Join a Program', href: '/contact', variant: 'default' },
          { label: 'Read Success Stories', href: '/impact-stories', variant: 'outline' },
        ]}
      />

      <Footer />
    </div>
  )
}
