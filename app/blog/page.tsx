import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { getAllBlogPosts } from '@/lib/blog'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import {
  FadeUp,
  FadeIn,
  SlideIn,
  ScaleIn,
  BounceIn,
} from '@/components/animations'

export const metadata: Metadata = {
  title: 'JOSUDDI Blog - Disability Awareness & Community Stories',
  description: 'Read articles about disability empowerment, entrepreneurship, advocacy, and success stories from JOSUDDI.',
  keywords: 'disability blog, PWD stories, advocacy articles, entrepreneurship, disability Uganda',
  openGraph: {
    title: 'JOSUDDI Blog - Disability Awareness & Community Stories',
    description: 'Read articles about disability empowerment, entrepreneurship, advocacy, and success stories.',
  },
}

export default function Blog() {
  const posts = getAllBlogPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))

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
            Articles & Updates
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.2s both' }}
          >
            JOSUDDI Blog & Updates
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.35s both' }}
          >
            Stay informed about disability advocacy, entrepreneurship tips, success stories,
            and community initiatives from across Kampala, Nabweru, and Wakiso.
          </p>
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <ScaleIn className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Tag size={28} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-lg font-medium">No blog posts yet.</p>
              <p className="text-muted-foreground text-sm mt-1">Check back soon — stories are coming!</p>
            </ScaleIn>
          ) : (
            <div className="space-y-8">
              {posts.map((post, i) => (
                <FadeUp key={post.slug} delay={i * 100}>
                  <article className="group p-8 rounded-2xl border border-border bg-muted/30 hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                      {/* Image */}
                      {post.image && (
                        <SlideIn from="left" delay={i * 100}>
                          <div className="relative h-52 rounded-xl overflow-hidden border border-border">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            {/* Category badge on image */}
                            <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs bg-primary text-white px-3 py-1 rounded-full font-semibold">
                              <Tag size={10} />
                              {post.category}
                            </span>
                          </div>
                        </SlideIn>
                      )}

                      {/* Content */}
                      <SlideIn
                        from="right"
                        delay={i * 100 + 100}
                        className={post.image ? 'md:col-span-2' : 'md:col-span-3'}
                      >
                        {/* Meta row */}
                        <div className="mb-4 flex gap-4 flex-wrap">
                          {!post.image && (
                            <BounceIn delay={i * 100 + 150}>
                              <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                                <Tag size={10} />
                                {post.category}
                              </span>
                            </BounceIn>
                          )}
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            {new Date(post.date + 'T00:00:00Z').toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              timeZone: 'UTC',
                            })}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <User size={12} />
                            {post.author}
                          </span>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{post.description}</p>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                        >
                          Read Article <ArrowRight size={14} />
                        </Link>
                      </SlideIn>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      {categories.length > 0 && (
        <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <FadeUp className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">Browse by Category</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Filter articles by topic to find what matters most to you.
              </p>
            </FadeUp>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, i) => (
                <BounceIn key={category} delay={i * 80}>
                  <Link
                    href={`#${category}`}
                    className="px-6 py-3 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200 font-medium text-foreground text-sm"
                  >
                    {category}
                  </Link>
                </BounceIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <ScaleIn>
        <CTASection
          title="Subscribe to Our Updates"
          description="Get articles on disability advocacy, success stories, and community news delivered to your inbox."
          buttons={[
            { label: 'Join Our Newsletter', href: '/contact', variant: 'default' },
            { label: 'Share Your Story', href: '/contact', variant: 'outline' },
          ]}
        />
      </ScaleIn>

      <Footer />
    </div>
  )
}