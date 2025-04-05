import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Logout() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  await supabase.auth.signOut()

  redirect('/')
}
