import type { Metadata } from "next";
import { SiteFooter } from "@/components/layouts/footer/site-footer";
import { SiteHeader } from "@/components/layouts/header/site-header";
import { SocialMediaRail } from "@/components/shared/social-media";
import { footerContent } from "@/features/navigation/data/footer-navigation";
import { socialMediaItems } from "@/features/navigation/data/social-media";

export const metadata: Metadata = {
  title: "Board Game Store",
  description:
    "Discover board games and tabletop accessories at Game Piece Labs.",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="storefront-typography flex min-h-screen flex-col bg-[var(--storefront-surface)] text-[#1A1A1A] antialiased selection:bg-blue-500/10">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter content={footerContent} />
      <SocialMediaRail items={socialMediaItems} />
    </div>
  );
}
