import React from "react";

function Page() {
  return (
    <div className=" max-w-7xl z-10 relative pt-[100px] mx-auto">
      <div className="flex flex-col justify-center text-justify">
        <h1 className="text-4xl font-semibold text-center">Travel</h1>
        <p className="text-lg max-w-3xl mx-auto font-normal text-justify mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
      </div>
      <div className="flex flex-col justify-center text-justify">
        <h1 className="text-4xl font-semibold text-center">Accommodation</h1>
        <p className="text-lg max-w-3xl mx-auto font-normal text-justify mt-4">
          First Come, First Serve: Our accommodation is provided on a
          first-come, first-serve basis. We recommend booking early to secure
          your spot and avoid any inconvenience.
        </p>
        <p className="text-lg max-w-3xl mx-auto font-normal text-justify mt-4">
          Facilities: Our accommodation facilities include clean and spacious
          bathrooms, and access to Food lounge Food: We provide delicious and
          nutritious meals for our guests.{" "}
        </p>
        <p className="text-lg max-w-3xl mx-auto font-normal text-justify mt-4">
          Our menu includes a variety of options to cater to different dietary
          preferences and requirements. We also offer special meals for guests
          with specific dietary needs, so please let us know in advance if you
          have any special requests.{" "}
        </p>
        <p className="text-lg max-w-3xl mx-auto font-normal text-justify mt-4">
          Security: Your safety and security are our top priorities. Our
          accommodation is monitored by security personnel, and we have strict
          access control measures in place to ensure a safe and comfortable
          environment for all our guests.{" "}
        </p>
        <p className="text-lg max-w-3xl mx-auto font-normal text-justify mt-4">
          Booking: To book your accommodation, please contact us directly(phone
          number: +917010962506). We look forward to welcoming you and providing
          you with a memorable experience! Please feel free to reach out to us
          if you have any questions or need further information. We are here to
          help and ensure that you have a pleasant stay with us.
        </p>
      </div>
    </div>
  );
}

export default Page;