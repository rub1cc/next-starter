'use client'
import { createBrowserClient } from '@/utils/supabase'
import { redirect } from 'next/navigation'

export default function LoginWithGoogleButton() {
  const signIn = async () => {
    const supabase = createBrowserClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/')
  }

  return (
    <button
      onClick={signIn}
      className="mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground"
    >
      Login with Google
    </button>
  )
}
