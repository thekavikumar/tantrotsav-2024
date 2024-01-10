"use client";
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function Login() {
	const userName = auth.currentUser;
	function handleLogin() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData?.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		});
	}

	function handleSignOut() {
		signOut(auth).catch((error) => {
			// An error happened.
		});
	}

	return (
		<main className="flex items-center justify-center">
			<div className="">
				{userName == null && (
					<button
						className="flex items-center gap-4 text-md font-semibold px-7 py-2 rounded-md hover:text-black hover:shadow-lg hover:bg-white border border-white duration-200 text-white "
						onClick={handleLogin}
					>
						<Image
							src={
								"https://static-00.iconduck.com/assets.00/google-icon-1024x1024-hv1t7wtt.png"
							}
							width={20}
							height={20}
							alt="google icon"
						/>
						Login
					</button>
				)}
				{userName != null && (
					<button
						className="flex items-center gap-4 text-md font-semibold px-7 py-2 rounded-md hover:text-black hover:shadow-lg hover:bg-white border border-white duration-200 text-white "
						onClick={handleSignOut}
					>
						<Image
							src={
								"https://static-00.iconduck.com/assets.00/google-icon-1024x1024-hv1t7wtt.png"
							}
							width={20}
							height={20}
							alt="google icon"
						/>
						Sign Out
					</button>
				)}
			</div>
		</main>
	);
}
