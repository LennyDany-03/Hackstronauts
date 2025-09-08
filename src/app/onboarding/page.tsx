import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import OnboardingClient from "./onboarding-client"

export default async function OnboardingPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()

  if (error || !data?.claims) {
    redirect("/auth/login")
  }

  return <OnboardingClient />
}
