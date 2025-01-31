import "@/styles/globals.css";

import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Head from "next/head";
import { headers } from "next/headers";
import Script from "next/script";

import { generateCsp } from "../../csp";

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
  const nonce = headers().get("x-nonce") || "";
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="csp-nonce" content={nonce} />
        <meta
          http-equiv="Content-Security-Policy"
          content={generateCsp(nonce)}
        />
      </Head>
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
        <Script
          nonce={nonce || undefined}
          id="_webengage_script_tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),
arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="webPersonalization feedback survey notification notificationInbox".split(z),c="options render clear abort".split(z),p="Prepare Render Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");webengage.init("311c605a");`,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
