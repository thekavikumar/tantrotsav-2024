import SocialMedia from "@/components/SocialMedia";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Launch from "@/components/Launch";
import ParticleWrapper from "@/components/ParticleWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Tantrotsav 2024",
  description: "National Techfest by Amrita Vishwa Vidyapeetham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col text-white">
        <ParticleWrapper>
          <Navbar />
          <SocialMedia />
          <Toaster />
          {children}
          {/* <div className="flex-1">{children}</div>
        {/* <div className="flex-1">
          <Launch />
        </div> */}
        </ParticleWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
