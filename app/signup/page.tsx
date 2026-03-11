'use client'

import { useState, FormEvent } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const supabaseUrl = 'https://suzmovbxrxqxzqzcqnlu.supabase.co'
const supabaseKey = 'sb_publishable_hRfPv4B86Qdsn2-hbbHIgA_2Z9K64Lq'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function SignUpPage() {
  const router = useRouter()
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: 'success' | 'error' | ''
  }>({ message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ message: '', type: '' })

    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const confirmPassword = formData.get('confirmPassword') as string

      if (password !== confirmPassword) {
        setFormStatus({
          message: 'Passwords do not match',
          type: 'error',
        })
        setIsSubmitting(false)
        return
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      setFormStatus({
        message: '✓ Sign up successful! Check your email to confirm your account.',
        type: 'success',
      })
      e.currentTarget.reset()

      // Redirect to sign in after 2 seconds
      setTimeout(() => {
        router.push('/signin')
      }, 2000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      setFormStatus({
        message: `✗ Error: ${errorMessage}`,
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-grid relative">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center px-6 py-24 mt-16">
        <div className="max-w-md w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-text-primary">Create Account</h1>
            <p className="text-text-secondary">
              Join Oriphim to access our signal engines and infrastructure
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 glass-panel p-6 md:p-8">
            <div>
              <label className="mono text-xs text-text-secondary block mb-2">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-panel border border-brand-green/25 text-text-primary px-4 py-3 focus:border-accent-green transition-colors font-bold"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mono text-xs text-text-secondary block mb-2">PASSWORD</label>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                className="w-full bg-panel border border-brand-green/25 text-text-primary px-4 py-3 focus:border-accent-green transition-colors font-bold"
                placeholder="Minimum 8 characters"
              />
            </div>

            <div>
              <label className="mono text-xs text-text-secondary block mb-2">CONFIRM PASSWORD</label>
              <input
                type="password"
                name="confirmPassword"
                required
                minLength={8}
                className="w-full bg-panel border border-brand-green/25 text-text-primary px-4 py-3 focus:border-accent-green transition-colors font-bold"
                placeholder="Confirm password"
              />
            </div>

            {formStatus.message && (
              <div
                className={`text-sm text-center py-3 px-4 rounded ${
                  formStatus.type === 'success'
                    ? 'bg-brand-green/15 text-accent-green border border-brand-green/30'
                    : formStatus.type === 'error'
                    ? 'bg-brand-green/10 text-brand-green border border-brand-green/30'
                    : 'bg-panel text-text-secondary border border-brand-green/20'
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-green text-bg-primary font-bold py-3 mt-6 rounded-lg hover:bg-accent-green transition-colors mono uppercase disabled:opacity-50"
            >
              {isSubmitting ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-text-secondary text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="text-brand-green hover:text-accent-green hover:underline font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
