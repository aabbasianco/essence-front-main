"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CardDemo() {
  const { setTheme } = useTheme()
  
  
  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>ورود به اکانت</CardTitle>
        <CardDescription>
          ایمیل خود را وارد کنید
        </CardDescription>
        <CardAction>
          <Button variant="link">ثبت نام</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">رمز عبور</Label>
                <a
                  href="#"
                  className="inline-block text-sm underline-offset-4 hover:underline"
                >
                  رمز عبور خود را فراموش کرده‌اید؟
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" size="lg" onClick={() => setTheme("dark")}>
          ورود
        </Button>
        <Button variant="outline" className="w-full" size="lg" onClick={() => setTheme("light")}>
          ورود با Google
        </Button>
      </CardFooter>
    </Card>
  )
}
