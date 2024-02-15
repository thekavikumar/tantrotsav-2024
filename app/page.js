import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Pricing from "@/components/Pricing";

export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<LandingPage />
			<Pricing />
			<Footer />
		</div>
	);
}
