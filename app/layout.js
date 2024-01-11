import SocialMedia from "@/components/SocialMedia";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Tantrotsav 2024",
  description: "National Techfest by Amrita Vishwa Vidyapeetham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col text-white">
        <Navbar />
        <SocialMedia />
        <Toaster />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
