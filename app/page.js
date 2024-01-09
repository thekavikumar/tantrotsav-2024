import Navbar from "../components/Navbar";
import Animation from "../components/Animation";
import SocialMedia from "@/components/SocialMedia";

export default function Page() {
  return (
    <div className="bg-black h-screen w-screen">
      <Navbar />
      <SocialMedia />
      <div className="w-screen h-screen">
        <Animation />
      </div>
    </div>
  );
}
