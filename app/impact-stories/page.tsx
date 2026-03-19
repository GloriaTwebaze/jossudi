import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impact Stories - JOSSUD Success Stories',
  description: 'Read inspiring success stories and testimonials from PWDs whose lives have been transformed through JOSSUD programs.',
  openGraph: {
    title: 'Impact Stories - JOSSUD Success Stories',
    description: 'Inspiring stories of PWDs transforming their lives through our programs.',
  },
}

export default function ImpactStories() {
  const stories = [
    {
      id: 1,
      name: 'Grace Nakibuule',
      disability: 'Physical Disability - Wheelchair User',
      program: 'Entrepreneurship Support',
      image: '/images/impact-story-1.jpg',
      imageAlt: 'Grace Nakibuule, successful PWD entrepreneur',
      story: 'Grace was marginalized by her community due to her disability. Through JOSSUD\'s entrepreneurship program, she learned business skills and started a small grocery shop. Today, she employs two other PWDs and generates over UGX 2 million monthly. "JOSSUD gave me hope when I had none. I now support my family with dignity," Grace says.',
      impact: 'From unemployed to business owner; now employs 2 PWDs; monthly income: UGX 2M+',
      quote: 'JOSSUD gave me hope when I had none. I now support my family with dignity.',
    },
    {
      id: 2,
      name: 'Yusuf Mohammed',
      disability: 'Hearing Impairment',
      program: 'Savings Groups (VSLA)',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'Yusuf Mohammed celebrating his tailoring business success',
      story: 'Yusuf struggled to access credit due to his hearing disability and lack of collateral. Joining our VSLA transformed his access to finance. He saved UGX 5 million, accessed a loan, and started a tailoring business. He now trains other deaf PWDs in tailoring skills.',
      impact: 'Saved UGX 5M+; Successfully running tailoring business; Trains other PWDs',
      quote: 'I never thought I could save money. The VSLA group showed me that together, we are stronger.',
    },
    {
      id: 3,
      name: 'Rebecca Owor',
      disability: 'Visual Impairment',
      program: 'Disability Support & Skills Training',
      image: '/images/impact-story-3.jpg',
      imageAlt: 'Rebecca Owor in her massage therapy training',
      story: 'Rebecca was unable to attend secondary school due to her visual impairment. JOSSUD provided educational support, assistive devices, and vocational training in massage therapy. She\'s now a recognized massage therapist earning good income and advocating for disabled students.',
      impact: 'Completed vocational training; Now earns UGX 1.5M+ monthly; Advocates for disabled students',
      quote: 'Without JOSSUD\'s support, I would still be sitting at home. Now I contribute to my family and community.',
    },
    {
      id: 4,
      name: 'Joseph Katumba',
      disability: 'Intellectual Disability',
      program: 'Advocacy & Awareness + Skills Training',
      image: '/images/impact-story-1.jpg',
      imageAlt: 'Joseph Katumba managing his community garden',
      story: 'Joseph faced severe discrimination due to his intellectual disability. Through our advocacy programs and vocational training, he learned horticultural skills. He now manages a community garden, grows vegetables for sale, and has become an advocate for PWD rights in his village.',
      impact: 'Managing community garden; Generates income from agriculture; Community advocate',
      quote: 'My disability doesn\'t define me. JOSSUD helped me see my potential.',
    },
    {
      id: 5,
      name: 'Fatima Nambi',
      disability: 'Multiple Disabilities - Blind & Deaf',
      program: 'Comprehensive Support Program',
      image: '/images/impact-story-2.jpg',
      imageAlt: 'Fatima Nambi leading advocacy efforts in her community',
      story: 'Fatima faced the most severe marginalization due to her multiple disabilities. Our intensive support included assistive device provision, specialized training, and income support. She now leads peer support groups for other PWDs with multiple disabilities and advocates for their inclusion.',
      impact: 'Leads peer support groups; Trained in advocacy; Supported 15+ PWDs with multiple disabilities',
      quote: 'Society said I was worthless. JOSSUD showed me my true value.',
    },
    {
      id: 6,
      name: 'David Lubega',
      disability: 'Mobility Impairment',
      program: 'Entrepreneurship & Savings Groups',
      image: '/images/impact-story-3.jpg',
      imageAlt: 'David Lubega at his phone repair business',
      story: 'David participated in both VSLA and entrepreneurship programs. He saved money through the group, accessed a startup loan, and established a phone repair business. His shop now employs 3 people and serves the entire community.',
      impact: 'Business owner; Employs 3 people; Monthly income: UGX 3M+',
      quote: 'JOSSUD believed in me when I didn\'t believe in myself. Now I believe in others.',
    },
  ]

  const testimonials = [
    {
      author: 'Martha Atim',
      title: 'VSLA Group Leader',
      testimonial: 'As a VSLA leader, I\'ve seen how JOSSUD\'s programs unite our community. The respect and dignity given to PWDs through these programs is unmatched.',
    },
    {
      author: 'Pastor James Okello',
      title: 'Community Leader',
      testimonial: 'JOSSUD has brought remarkable change to our community. The stigma against PWDs has reduced significantly thanks to their awareness campaigns.',
    },
    {
      author: 'Dr. Susan Kyagaba',
      title: 'Healthcare Worker',
      testimonial: 'I\'ve witnessed the health improvements in our community since JOSSUD\'s programs started. PWDs now have access to healthcare and psychological support.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Stories of Transformation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Read inspiring stories of how JOSSUD programs have transformed the lives of PWDs in Kampala and Wakiso.
          </p>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {stories.map((story) => (
              <article
                key={story.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-lg border border-border bg-muted/30 hover:border-primary transition-colors"
              >
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden bg-muted border border-border">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-foreground mb-1">{story.name}</h2>
                    <p className="text-primary font-semibold">{story.disability}</p>
                    <p className="text-sm text-muted-foreground">Program: {story.program}</p>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 my-6 italic">
                    <p className="text-lg text-foreground">{story.quote}</p>
                  </blockquote>

                  <p className="text-muted-foreground leading-relaxed mb-6">{story.story}</p>

                  <div className="p-4 rounded bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Impact Achieved:</h4>
                    <p className="text-muted-foreground">{story.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-lg border border-border bg-background">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.testimonial}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Collective Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg border border-border bg-muted/30">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">PWDs Empowered</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-muted/30">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-sm text-muted-foreground">Businesses Started</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-muted/30">
              <div className="text-3xl font-bold text-primary mb-2">UGX 500M+</div>
              <p className="text-sm text-muted-foreground">Income Generated</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-muted/30">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Communities Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Your Story Could Be Next"
        description="Are you a PWD looking for support? Or someone who wants to help create change? Join us today."
        buttons={[
          { label: 'Get Support', href: '/contact', variant: 'default' },
          { label: 'Learn More Programs', href: '/programs', variant: 'outline' },
        ]}
      />

      <Footer />
    </div>
  )
}
