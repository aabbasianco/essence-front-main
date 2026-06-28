import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import { ThemeToggle } from '@/components/theme-toggle';

export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <ThemeToggle/>
        <Image
          className="m-auto"
          src="/images/logos/essence_logo_type_primary_dark_transparent_en.png"
          alt="Logo"
          width={260}
          height={120}
        />
        <LoginForm />
      </div>
    </div>
  )
}
