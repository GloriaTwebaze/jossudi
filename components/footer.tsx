'use client'

import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  X
} from 'lucide-react'
import { FaFacebook, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import { Button } from '@/components/ui/button'

// 🔹 Social links config
const socialLinks = [
  {
    href: 'https://facebook.com/josuddi22',
    label: 'Facebook',
    icon: FaFacebook,
  },
  {
    href: 'https://wa.me/256772888272',
    label: 'WhatsApp',
    icon: FaWhatsapp,
  },
  {
    href: 'https://youtube.com/@josuddi22',
    label: 'YouTube',
    icon: FaYoutube,
  },
  {
    href: 'https://x.com/josuddi', 
    label: 'X',
    icon: SiX,
  },
]

// 🔹 Navigation links config
const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact-stories', label: 'Impact Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Organisation Info */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">JOSUDDI</h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              A community-driven organization empowering Persons with Disabilities in Kampala metropolitan through inclusive savings groups, entrepreneurship programs, and advocacy initiatives creating sustainable livelihoods since 2022.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="p-2 rounded-lg bg-accent border border-border hover:bg-background hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>

            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 text-muted-foreground">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    Kampala, Mukono & Wakiso, Uganda
                  </span>
                </li>

                <li className="flex gap-2 text-muted-foreground">
                  <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                  <a
                    href="tel:+256772888272"
                    className="hover:text-primary transition-colors"
                  >
                    +256 772 888 272 | +256 705 959 114
                  </a>
                </li>

                <li className="flex gap-2 text-muted-foreground">
                  <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                  <a
                    href="mailto:josuddi@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    josuddi@gmail.com
                  </a>
                </li>
              </ul>
            </address>

            {/* CTA */}
            <div className="mt-6">
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 w-[40%] md:hidden">
                <Link href="/contact">Support Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>

            <p className="text-sm text-muted-foreground mb-4">
              Get updates on our programs and impact stories. No spam, ever.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button type="submit" size="sm" variant="outline" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} JOSUDDI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}