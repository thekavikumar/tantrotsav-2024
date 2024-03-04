import React from "react";

function Page() {
  return (
    <div className=" max-w-7xl z-10 relative pt-[100px] mx-auto">
      <div className="flex flex-col justify-center text-justify p-6">
        <h1 className="text-4xl font-semibold text-center">Travel</h1>
        <p className="text-lg max-w-3xl mx-auto text-zinc-400  font-normal uppercase text-justify mt-4">
          <span className="font-bold text-xl text-white">Route 1: </span>egmore
          → nehru park → kilpauk → pachaiappas → dpi → ampa skywalk → shanti
          colony → roundana → k4 → icf south colony → icf rail museum →
          nathamuni → sidco → padi → drj → senthil → temple school → retteri →
          madhavaram → puzhal → redhills → alamathi → edapakkam → tamaraipakkam
          → Amrita Vishwa Vidyapeetham, Chennai
        </p>
      </div>
      <div className="flex flex-col justify-center text-justify p-6">
        <h1 className="text-4xl font-semibold text-center">Accommodation</h1>
        <p className="text-lg max-w-3xl mx-auto font-normal text-zinc-400 text-justify mt-4">
          <span className="font-bold text-xl text-white">
            First Come, First Serve:{" "}
          </span>
          Our accommodation is provided on a first-come, first-serve basis. We
          recommend booking early to secure your spot and avoid any
          inconvenience.{" "}
          <span className="font-bold ">
            The accommodation fee is 100 INR per person per day
          </span>
          . We only accept bulk bookings.
        </p>

        <p className="text-lg max-w-3xl mx-auto font-normal text-zinc-400 text-justify mt-4">
          <span className="font-bold text-xl text-white">Security: </span>
          Your safety and security are our top priorities. Our accommodation is
          monitored by security personnel, and we have strict access control
          measures in place to ensure a safe and comfortable environment for all
          our guests.{" "}
        </p>
        <p className="text-lg max-w-3xl mx-auto font-normal text-zinc-400 text-justify mt-4">
          <span className="font-bold text-xl text-white">Booking: </span>
          To book your accommodation, please contact us directly (+919025313327,
          +917010962506, +919176966160, +919248451171, +919150044217). We look
          forward to welcoming you and providing you with a memorable
          experience! Please feel free to reach out to us if you have any
          questions or need further information. We are here to help and ensure
          that you have a pleasant stay with us.
        </p>
      </div>
    </div>
  );
}

export default Page;
