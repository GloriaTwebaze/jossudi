'use client'

import { useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import {
  FadeUp,
  FadeIn,
  SlideIn,
  ScaleIn,
  BounceIn,
} from '@/components/animations'

const programs = [
    {
      id: 'vslas',
      title: 'Savings Groups (VSLAs)',
      short: 'Village Savings and Loan Associations for PWDs in Uganda',
      overview: 'Our Village Savings and Loan Associations are the heartbeat of JOSUDDI. Members meet weekly, contribute mandatory savings, and access revolving loans to invest in their businesses and cover emergencies. We currently support over 30 VSLAs across Kampala, Mukono, and Wakiso.',
      image: '/images/vsla-program.jpg',
      imageAlt: 'Women and men in a VSLA savings group meeting, managing finances together',
      benefits: [
        'Safe savings mechanism',
        'Access to emergency loans for health and education',
        'Training in financial literacy and business management',
        'Social support and peer mentoring',
        'Access to affordable loans without collateral and at low interest rates',
      ],
      impact: 'Our VSLA members have collectively saved over UGX 50 million and accessed loans for health services, education, and business startups.',
      target: 'PWDs aged 18+, living in Kampala, Mukono and Wakiso communities',
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship Support',
      short: 'Business Training and Support for Persons with Disabilities',
      overview: 'We nurture the culture of entrepreneurship as the most sustainable path to income for PWDs who face discrimination in formal employment. Members receive business skills training, mentorship, and access to capital — not as charity, but as investment in their potential.',
      image: '/images/entrepreneurship.jpg',
      imageAlt: 'Person with disability running their own successful business',
      benefits: [
        'Business skills and entrepreneurship training',
        'Market linkages and business networking',
        'Mentorship from our team',
        'Access to start-up capital',
        'Ongoing business coaching and support',
      ],
      impact: 'Over 150 PWDs have started sustainable businesses, generating over UGX 200 million in annual income.',
      target: 'PWDs with business ideas or existing businesses looking to grow',
    },
    {
      id: 'advocacy',
      title: 'Advocacy & Awareness',
      short: 'Disability Inclusion Advocacy in Kampala & Wakiso',
      overview: 'We work to create communities that genuinely value PWDs not just tolerate them. This means shifting mindsets, advocating for inclusion in local decision-making, and building the confidence of PWDs to speak up, lead, and participate fully in community life.',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'Community members and PWDs together in an awareness campaign',
      benefits: [
        'Community awareness campaigns on disability inclusion',
        'Disability rights training and advocacy workshops',
        'Policy engagement and government advocacy',
        'Media campaigns challenging disability stigma',
        'Youth leadership programs',
      ],
      impact: 'Our campaigns have reached 30+ communities and influenced local government policies on PWD inclusion.',
      target: 'General public, PWDs, community leaders, and policymakers',
    },
    {
      id: 'disability-support',
      title: 'Disability Support',
      short: 'Direct Support for PWDs & Caregivers in Uganda',
      overview: 'We provide direct support to adults living with physical disability, cerebral palsy, intellectual disability, hearing impairment, mental illness, and speech disability — as well as parents and caretakers of children with disabilities, recognising that the burden of disability often extends to the whole family.',
      image: '/images/impact-story-3.jpg',
      imageAlt: 'PWD receiving training and support for skill development',
      benefits: [
        'Assistive device support',
        'Healthcare and support linkages',
        'Vocational training and skills development',
        'Rehabilitation and counseling services',
      ],
      impact: 'Provided support devices to 50+ PWDs, trained 100+ PWDs in various skills, supported 50+ PWDs and caregivers with healthcare linkages.',
      target: 'Vulnerable PWDs and caretakers of children with disabilities in our communities',
    },
  ]


const validTabs = programs.map((p) => p.id)

export function ProgramsTabs() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const defaultTab = validTabs.includes(tabParam ?? '') ? tabParam! : 'vslas'

  return (
    <FadeIn>
      <Tabs defaultValue={defaultTab} className="w-full">
        <FadeUp>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {programs.map((program) => (
              <TabsTrigger key={program.id} value={program.id}>
                <span className="hidden sm:inline">{program.title.split(' ')[0]}</span>
                <span className="sm:hidden text-xs">{program.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </FadeUp>

        {programs.map((program) => (
          <TabsContent key={program.id} value={program.id} className="space-y-8">
            <SlideIn from="left">
              <h2 className="text-3xl font-bold text-foreground mb-1">{program.title}</h2>
              <p className="text-base text-accent font-semibold">{program.short}</p>
            </SlideIn>

            <ScaleIn>
              <div className="relative h-80 rounded-2xl overflow-hidden border border-border shadow-lg">
                <Image src={program.image} alt={program.imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScaleIn>

            <FadeUp delay={100}>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{program.overview}</p>
              </div>
            </FadeUp>

            <div>
              <FadeUp delay={150}>
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Benefits</h3>
              </FadeUp>
              <ul className="space-y-3 mb-8">
                {program.benefits.map((benefit, idx) => (
                  <FadeUp key={idx} delay={idx * 80 + 200}>
                    <li className="flex gap-3">
                      <BounceIn delay={idx * 80 + 250}>
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary flex-shrink-0 text-sm font-semibold">
                          ✓
                        </span>
                      </BounceIn>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SlideIn from="left" delay={100}>
                <div className="h-full p-6 rounded-xl border border-border bg-primary/5 border-l-4 border-l-primary">
                  <h4 className="font-semibold text-foreground mb-2">Our Impact</h4>
                  <p className="text-muted-foreground">{program.impact}</p>
                </div>
              </SlideIn>
              <SlideIn from="right" delay={100}>
                <div className="h-full p-6 rounded-xl border border-border bg-muted/30 border-l-4 border-l-primary/40">
                  <h4 className="font-semibold text-foreground mb-2">Target Beneficiaries</h4>
                  <p className="text-muted-foreground">{program.target}</p>
                </div>
              </SlideIn>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </FadeIn>
  )
}