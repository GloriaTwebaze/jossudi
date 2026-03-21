'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Loader2, Check, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  FadeUp,
  FadeIn,
  SlideIn,
  ScaleIn,
  BounceIn,
} from '@/components/animations'

export default function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
        return
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
      setErrorMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactItems = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kampala, Nabweru & Wakiso Districts, Uganda',
      href: undefined,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+256 772 888 272 | +256 705 959 114',
      href: 'tel:+256772888272',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'josuddi@gmail.com',
      href: 'mailto:josuddi@gmail.com',
    },
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ]

  const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+256 XXX XXX XXX', required: false },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?', required: false },
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
            We'd Love to Hear From You
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.2s both' }}
          >
            Get In Touch
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl text-balance"
            style={{ animation: 'heroFadeUp 0.7s ease 0.35s both' }}
          >
            Have questions, want to support our cause, or need assistance?
            We're here for you — reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── LEFT: Contact Info ── */}
            <div className="space-y-6">
              <SlideIn from="left">
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Find us in Kampala, Mukono, and Wakiso or reach out digitally.
                </p>
              </SlideIn>

              {/* Contact items */}
              <div className="space-y-4">
                {contactItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <FadeUp key={item.label} delay={i * 100 + 100}>
                      <div className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary transition-colors duration-200">
                        <BounceIn delay={i * 100 + 200}>
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 shrink-0">
                            <Icon size={20} className="text-primary" />
                          </div>
                        </BounceIn>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.label}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </FadeUp>
                  )
                })}
              </div>

              {/* Office hours */}
              <FadeUp delay={450}>
                <div className="p-6 rounded-xl border border-border bg-primary/5 border-l-4 border-l-primary">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={18} className="text-primary" />
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {officeHours.map((row, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{row.day}</span>
                        <span className={`font-medium ${row.time === 'Closed' ? 'text-destructive' : 'text-foreground'}`}>
                          {row.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            {/* ── RIGHT: Form ── */}
            <SlideIn from="right" className="lg:col-span-2">
              <div className="p-8 rounded-2xl border border-border bg-muted/30">
                <FadeUp>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill in the form below and we'll get back to you within 24 hours.
                  </p>
                </FadeUp>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Text fields */}
                  {formFields.map((field, i) => (
                    <FadeUp key={field.id} delay={i * 80 + 100}>
                      <div>
                        <label
                          htmlFor={field.id}
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          {field.label} {field.required && <span className="text-primary">*</span>}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        />
                      </div>
                    </FadeUp>
                  ))}

                  {/* Message textarea */}
                  <FadeUp delay={420}>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us your message, question, or how you'd like to support..."
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow"
                      />
                    </div>
                  </FadeUp>

                  {/* Success message */}
                  {submitStatus === 'success' && (
                    <ScaleIn>
                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex gap-3">
                        <Check className="text-primary shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="font-semibold text-foreground">Message sent successfully!</p>
                          <p className="text-sm text-muted-foreground">
                            Thank you for reaching out. We'll get back to you soon.
                          </p>
                        </div>
                      </div>
                    </ScaleIn>
                  )}

                  {/* Error message */}
                  {submitStatus === 'error' && (
                    <ScaleIn>
                      <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                        <p className="font-semibold text-destructive">{errorMessage}</p>
                      </div>
                    </ScaleIn>
                  )}

                  {/* Submit */}
                  <FadeUp delay={500}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-base h-11"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </FadeUp>
                </form>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}