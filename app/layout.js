import SocialMedia from "@/components/SocialMedia";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tantrotsav 2024",
  description: "National Techfest by Amrita Vishwa Vidyapeetham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black flex h-screen flex-col text-white">
        <Navbar />
        <SocialMedia />
        <div className="flex-1 p-20">{children}</div>
      </body>
    </html>
  );
}
