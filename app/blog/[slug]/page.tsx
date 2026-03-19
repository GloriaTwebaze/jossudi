import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { getBlogPost, getBlogPostSlugs } from '@/lib/blog'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getBlogPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = getBlogPost(params.slug)
    return {
      title: `${post.title} - JOSSUD Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
      },
    }
  } catch (error) {
    return {
      title: 'Blog Post - JOSSUD',
    }
  }
}

export default function BlogPost({ params }: BlogPostPageProps) {
  let post
  try {
    post = getBlogPost(params.slug)
  } catch (error) {
    notFound()
  }

  // MDX components for styling
  const mdxComponents = {
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }: any) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }: any) => (
      <ul className="space-y-2 mb-6 ml-6">{children}</ul>
    ),
    li: ({ children }: any) => (
      <li className="text-muted-foreground list-disc">{children}</li>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 italic bg-primary/5 rounded">
        {children}
      </blockquote>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-foreground">{children}</em>
    ),
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Back to Blog */}
      <div className="w-full py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Post Header */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 flex gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              <Tag size={12} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <User size={12} />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground text-balance">{post.description}</p>
        </div>
      </section>

      {/* Post Content */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="w-full py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="p-6 rounded-lg border border-border bg-background">
            <h3 className="text-lg font-semibold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              {post.author} is committed to advancing disability rights and empowerment in Uganda. Follow us for more insights and stories.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
          <Link href="/blog" className="inline-block">
            <Button variant="outline">
              View All Articles
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Stay Connected"
        description="Subscribe to our blog for more stories, insights, and updates on disability empowerment."
        buttons={[
          { label: 'Subscribe', href: '/contact', variant: 'default' },
          { label: 'Share Your Story', href: '/contact', variant: 'outline' },
        ]}
      />

      <Footer />
    </div>
  )
}
