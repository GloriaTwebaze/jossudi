import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { getAllBlogPosts } from '@/lib/blog'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'JOSSUD Blog - Disability Awareness & Community Stories',
  description: 'Read articles about disability empowerment, entrepreneurship, advocacy, and success stories from JOSSUD.',
  keywords: 'disability blog, PWD stories, advocacy articles, entrepreneurship, disability Uganda',
  openGraph: {
    title: 'JOSSUD Blog - Disability Awareness & Community Stories',
    description: 'Read articles about disability empowerment, entrepreneurship, advocacy, and success stories.',
  },
}

export default function Blog() {
  const posts = getAllBlogPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            JOSSUD Blog & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Stay informed about disability advocacy, entrepreneurship tips, success stories, and community initiatives.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="p-8 rounded-lg border border-border bg-muted/30 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Image */}
                      {post.image && (
                        <div className="md:col-span-1">
                          <div className="h-48 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border">
                            <p className="text-muted-foreground">{post.title}</p>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className={post.image ? 'md:col-span-2' : ''}>
                        <div className="mb-4 flex gap-3 flex-wrap">
                          <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            <Tag size={12} />
                            {post.category}
                          </span>
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

                        <h2 className="text-2xl font-bold text-foreground mb-3">{post.title}</h2>
                        <p className="text-muted-foreground mb-6">{post.description}</p>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Read Article
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="w-full py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`#${category}`}
                  className="px-6 py-3 rounded-lg border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all font-medium text-foreground"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Subscribe to Our Updates"
        description="Get articles on disability advocacy, success stories, and community news delivered to your inbox."
        buttons={[
          { label: 'Join Our Newsletter', href: '/contact', variant: 'default' },
          { label: 'Share Your Story', href: '/contact', variant: 'outline' },
        ]}
      />

      <Footer />
    </div>
  )
}
