import Image from "next/image";
import React from "react";
import zarobay from "./zarobay.svg";

function Sponsor() {
  return (
    <div className="w-full">
      <h1 className="text-white uppercase text-center font-bold sm:text-[50px] text-[40px] mb-10">
        Sponsors
      </h1>
      <div className="flex items-center justify-center mt-6">
        <div className="flex flex-col items-center gap-3">
          <Image src={zarobay} alt="sponsor" width={60} height={60} />
          <p className="text-gray-200 font-light text-lg">Zarobay</p>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;