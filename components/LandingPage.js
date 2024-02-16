"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";
import ufo from "../components/ufo.png";
import logo3 from "../components/logo3.png";
import a1 from "../components/astronaut.png";
import SocialMedia from "./SocialMedia";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen ">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <Spline
          scene="https://prod.spline.design/gTGVvXhoIrBSb1bg/scene.splinecode"
          className="hidden md:block"
        />
        <Image src={logo3} className="md:hidden" width={200} />
      </div>
      <Image
        src={a1}
        width={150}
        className="absolute lg:bottom-9 lg:left-[80px] md:w-[250px] floating bottom-[90px]"
      />
      <Image
        src={ufo}
        className="floatingaus absolute top-[200px] right-6 w-[160px] md:w-[250px] lg:top-[130px] lg:right-[380px] "
      />
      <SocialMedia />
    </div>
  );
};

export default LandingPage;
