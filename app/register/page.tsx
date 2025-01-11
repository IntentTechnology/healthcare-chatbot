
import Register from "@/components/Register";
import Image from "next/image";

export default function RegisterPage() {
  // In a real application, you would check if the user is authenticated
  // For this example, we'll just show the login page
  // If you want to simulate a logged-in state, uncomment the next line
  // redirect('/dashboard')

  return (
    <div className=" flex-col  md:flex-row  flex  items-center justify-center   bg-[#E0EDF6]">
      <div className="flex flex-col gap-5 mt-20">
        <div className="flex md:hidden justify-center items-center">
          {" "}
          <Image src={"/botMobile.png"} alt={""} width={50} height={50} />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-2xl font-bold text-center uppercase text-[#123c47]">
            {" "}
            Hey There?
          </h1>
          <p className="text-center">
            welcome to your personal health care chatbot
          </p>
        </div>
     
       <Register/>
      </div>
      <div className="hidden md:flex">
        {" "}
        <Image src={"/botchatimage.png"} alt={""} width={600} height={600} />
      </div>
    </div>
  );
}
