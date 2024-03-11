import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const ibm_plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

// export const metadata: Metadata = {
//   title: "image-ai",
//   description: "AI-Powered image processor",
//   icons:['/assets/images/logo-text.svg']
// };

export const metadata: Metadata = {
  title: {
    template: '%s | image-ai',
    default: 'Unleash Your Creative Vision With Image-AI | image-AI',
  },
  description: 'AI-Powered image processor',
  
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn('font-ibm-plex antialiased', ibm_plex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
