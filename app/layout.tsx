import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { notoSans } from "@/lib/fonts";

// Theme probider
import { ThemeProvider } from "@/components/theme-provider" 

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