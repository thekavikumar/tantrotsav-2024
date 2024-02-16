import { urlForImage } from "@/sanity/lib/image";

const ProfileOrderCard = ({ order }) => {
  console.log(order);
  return (
    <div className="nft z-30 flex items-center cursor-pointer	">
      <div className="main w-full flex items-center gap-3">
        <img
          className="tokenImage"
          src={urlForImage(order?.eventImage)}
          alt="image"
          width={200}
          height={200}
        />

        <div className="flex items-center w-full justify-between">
          <h2 className="title text-lg font-semibold">{order.eventTitle}</h2>
          <h2 className="title text-lg font-semibold">
            ₹ {order.registrationFee}
          </h2>
        </div>

        <div className="tokenInfo w-full cursor-pointer hover:text-black">
          <button className="price text-[#ee83e5] hover:text-black duration-200 ease-in-out w-full text-center rounded-md hover:bg-[#ee83e5] ">
            Purchased
          </button>
        </div>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img src={urlForImage(order.clubImage)} />
          </div>
          <p>
            <ins>Creation of</ins> {order.club}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrderCard;
