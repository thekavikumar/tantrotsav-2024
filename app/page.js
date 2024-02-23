import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import Sponsor from "@/components/Sponsor";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <LandingPage />
      <Sponsor />
      <About />
      <Footer />
    </div>
  );
}
