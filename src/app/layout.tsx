// https://ui.shadcn.com/docs/dark-mode/next
// https://vercel.com/docs/analytics/quickstart#add-the-analytics-component-to-your-app
// https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

