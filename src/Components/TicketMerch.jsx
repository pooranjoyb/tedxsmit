const TicketMerch = () => {
  return (
    <>
      <div className="glass">
      <div id="tickets" className="w-full py-5 px-4">
          <div className="text-4xl font-bold text-center my-[3rem]">
            GRAB YOUR <span className="text-[#EB0028]">TICKETS</span>

          </div>
          <a href="https://forms.gle/qe6o3XTjj3mzCnwA9" target="_blank"><div className="wrapper">
            <img src="./assets/ticket.jpg" alt="" className="w-[30rem]" />
            <img className="w-[30rem]" src="./assets/ticket.jpg" alt="" />
            <img src="./assets/ticket.jpg" className="w-[30rem]" alt="" />
            <img src="./assets/ticket.jpg" className="w-[30rem]" alt="" />
            <img src="./assets/ticket.jpg" className="w-[30rem]" alt="" />
          </div>
          </a>
        </div>
        <div id="merch" className=" w-full py-5 px-4">
          <div className="text-4xl font-bold text-center my-[3rem]">
            PRIME <span className="text-[#EB0028]">MERCHANDISE</span>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src="./assets/tshirt.jpeg" alt="/" />
            <div className="flex flex-col justify-center">
              <p className=" font-bold ">
                <b className="text-[#EB0028]">TEDx</b>
                <b className="text-[#fff]"> SMIT</b>
              </p>
              <h1 className="text-[#fff] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Official Polo T-Shirt
              </h1>
              <p className="text-[#fff]">
                Whether you're an attendee, speaker, or just a fan, our T-shirts
                are designed to match your TEDxSMIT spirit! Don't miss out on this
                opportunity to own a piece of TEDxSMIT's legacy! Limited
                quantities available, so act fast!
              </p>
              <a href="https://forms.gle/fJHRkPewjPPV6wDeA">
                <button className="bg-white text-[#EB0028] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default TicketMerch;
