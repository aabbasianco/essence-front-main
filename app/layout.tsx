import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

// RTL
import { Noto_Sans_Arabic } from "next/font/google"
// import { Noto_Naskh_Arabic } from "next/font/google"

// Theme probider
import { ThemeProvider } from "@/components/theme-provider"

// RTL
const notoSans = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Essence | اسانس",
  description: "اولین و بزرگترین فروشگاه تخصصی ادکلن در ایران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="fa"
      dir="rtl"
      className={cn("h-full", "antialiased", notoSans.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            </ThemeProvider>
      </body>
    </html>
  );
}