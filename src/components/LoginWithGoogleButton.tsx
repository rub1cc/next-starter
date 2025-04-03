'use client'
import { createBrowserClient } from '@/utils/supabase'
import { cn } from '@/utils/tailwind'
import Image from 'next/image'
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
  }

  return (
    <button
      onClick={signIn}
      className={cn(
        'mx-auto text-lg',
        'rounded-full border border-gray-300 bg-white px-8 py-4 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'flex items-center justify-center gap-4',
      )}
    >
      <Image
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="inline-block h-5 w-5"
        width={20}
        height={20}
      />
      Login with Google
    </button>
  )
}
