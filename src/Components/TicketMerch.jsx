import tshirt from "../img/tshirt.jpeg";
const TicketMerch = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={tshirt} alt="/" />
          <div className="flex flex-col justify-center">
            <p className=" font-bold ">
              <b className="text-[#EB0028]">TEDx</b>
              <b className="text-[#000000]"> SMIT</b>
            </p>
            <h1 className="text-[#000000] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Official Polo T-Shirt
            </h1>
            <p className="text-[#000000]">
              Whether you're an attendee, speaker, or just a fan, our T-shirts
              are designed to match your TEDxSMIT spirit! Don't miss out on this
              opportunity to own a piece of TEDxSMIT's legacy! Limited
              quantities available, so act fast!
            </p>
            <a href="https://forms.gle/fJHRkPewjPPV6wDeA">
              <button className="bg-black text-[#EB0028] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketMerch;
