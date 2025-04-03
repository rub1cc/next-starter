import AuthButton from '@/components/AuthButton'
import Header from '@/components/Header'
import ThemeToggle from '@/components/ThemeToggle'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createServerClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          {isSupabaseConnected ? <AuthButton /> : 'Supabase not connected'}
        </div>
        <ThemeToggle />
      </nav>

      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <Header />
      </div>
    </div>
  )
}
