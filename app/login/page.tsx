import React from "react";
import Image from "next/image";
import Login from "@/components/Login";

const Loginpage = () => {
  return (
    <div className=" flex-col  md:flex-row  flex  items-center justify-center min-h-screen  bg-[#E0EDF6]">
      <div className="flex flex-col gap-5">
        <div className="flex md:hidden justify-center items-center">
          {" "}
          <Image src={"/botMobile.png"} alt={""} width={50} height={50} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center uppercase text-[#123c47]">
            {" "}
            Hey There?
          </h1>
          <p className="text-center">
            welcome to your personal health care chatbot
          </p>
        </div>

        <Login />
      </div>
      <div className="hidden md:flex">
        {" "}
        <Image src={"/botchatimage.png"} alt={""} width={600} height={600} />
      </div>
    </div>
  );
};

export default Loginpage ;
