import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";

export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<LandingPage />
			<About />
			<Footer />
		</div>
	);
}
