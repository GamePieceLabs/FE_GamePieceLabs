import type { Metadata } from "next";
import localFont  from "next/font/local";
import { SiteFooter } from "@/components/layouts/footer/site-footer";
import { SiteHeader } from "@/components/layouts/header/site-header";
import { SocialMediaRail } from "@/components/shared/social-media";
import { footerContent } from "@/features/navigation/data/footer-navigation";
import { socialMediaItems } from "@/features/navigation/data/social-media";

const storefrontFont = localFont({
  src: [
    {
      path: "../../font/barlow_n5.a193a1990790eba0cc5cca569d23799830e90f07.woff2",
      weight: "500",
      style: "normal", 
    },
    {
      path: "../../font/barlow_n7.691d1d11f150e857dcbc1c10ef03d825bc378d81.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Board Game Store",
  description: "Discover board games and tabletop accessories at Game Piece Labs.",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${storefrontFont.variable} ${storefrontFont.className} storefront-typography flex min-h-screen flex-col bg-white text-neutral-900 antialiased selection:bg-blue-500/10`}
    >
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter content={footerContent} />
      <SocialMediaRail items={socialMediaItems} />
    </div>
  );
}
