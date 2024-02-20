import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Tantrotsav 2024",
  description: "National Techfest by Amrita Vishwa Vidyapeetham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white bg-image-hero bg-cover">
        <Navbar />
        <Toaster />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
