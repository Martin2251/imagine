import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

// Define the font configuration
const fontConfig = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata= {
  title: "Imagine",
  description: "AI-Powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary: "#624cf5"}}}>
    <html lang="en">
      <head>
        {/* Include the font styles */}
        <style dangerouslySetInnerHTML={{ __html: fontConfig }} />
      </head>
      <body className={cn("font-IBMPlex antialiased")}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
