import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import ParticleWrapper from "@/components/ParticleWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Tantrotsav 2024",
  description: "National Techfest by Amrita Vishwa Vidyapeetham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white bg-image-hero bg-cover">
        <ParticleWrapper>
          <Navbar />
          <Toaster />
          {children}
        </ParticleWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
