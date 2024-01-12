"use client";

import { useUserDetails } from "@/context/zustand";
import Image from "next/image";
import React from "react";

function Page() {
  const { user } = useUserDetails();
  console.log(user);
  return (
    <div>
      {user && (
        <Image src={user?.photoURL} width={100} height={100} alt="profile" />
      )}
    </div>
  );
}

export default Page;
