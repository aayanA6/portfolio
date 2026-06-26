import type { Metadata, Viewport } from "next";
import "./globals.css";
import "98.css/dist/98.css"; // imported after globals so its bevels win over Tailwind preflight
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.blurb,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.blurb,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#008080",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
