"use client";
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useUserDetails } from "@/context/zustand";

export default function Login() {
  const { user, setUser, signOutUser } = useUserDetails();

  function handleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        signOutUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <main className="flex h-screen items-center justify-center">
      {user && <h1>{user.displayName}</h1>}
      <div className="">
        {user == null && (
          <button
            className="flex items-center gap-3 px-6 py-4 rounded-md text-white hover:shadow-lg hover:bg-white border border-black duration-200 hover:text-black bg-black"
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
            Login With Google
          </button>
        )}
        {user != null && (
          <button
            className="flex items-center gap-3 px-6 py-4 rounded-md text-white hover:shadow-lg hover:bg-white border border-black duration-200 hover:text-black bg-black"
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
