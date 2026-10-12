import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { ToastProvider } from "@/context/toast-context";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const siteUrl = "https://verdantliving.example";
const description =
  "Designer planters, growing essentials, and garden details for spaces that feel more like you.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Verdant Living — Objects for a Greener Everyday",
    template: "%s — Verdant Living",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Verdant Living",
    title: "Verdant Living — Objects for a Greener Everyday",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <CartProvider>
          <ToastProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
