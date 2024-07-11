import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/constant";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-neutral-50 font-sans antialiased dark:bg-neutral-950",
          fonts,
        )}
      >
        <Toaster />
        <ThemeProvider attribute="class">
          <TooltipProvider delayDuration={10}>
            <main className="py-8 font-sans sm:pt-8 md:pt-16">{children}</main>
            <SpeedInsights />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
