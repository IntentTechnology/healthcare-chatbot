"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "./forms/RegisterForm";
import OtpForm from "./forms/OtpForm";
import FullPageLoader from "./FullPageLoader";

export default function Register() {
  const { toast } = useToast();
  const [form, setForm] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState({
    message: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();
  console.log(error.name, "mname");
  const handleSendOtp = async () => {
    setError({
      message: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    });
    setIsLoading(true);

    if (password !== confirmPassword) {
      // setError("Passwords do not match");
      setError({
        message: "",
        name: "",
        email: "",
        password: "Passwords do not match",
        confirmPassword: "",
        otp: "",
      });
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(
        "https://smartcare-auth.onrender.com/api/smart_care/signup/send_otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
          }),
        }
      );

      const data = await response.json();
      console.log("Registration successful:", data);

      if (data.message === "OTP sent successfully") {
        setForm(1);
      } else if (data.message === "This email already exists with us") {
        toast({
          title: "Email already Exists",
          description: data?.message,
          variant: "destructive",
        });
      } else {
        setError({
          message: "",
          name: data.error.name,
          email: data.error.email,
          password: data.error.password,
          confirmPassword: data.error.confirmPassword,
          otp: "",
        });
      }
    } catch (err) {
      // setError("Failed to send OTP. Please try again.");
      setError({
        message: "Failed to send OTP. Please try again.",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        otp: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({
      message: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    });
    setIsLoading(true);
    setOtpSent(true);

    try {
      const response = await fetch(
        "https://smartcare-auth.onrender.com/api/smart_care/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            otp,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await response.json();
      if (data.message === "Account created successfully") {
        // Handle successful registration
        toast({
          title: data?.message,
          description: "Registration successful",
          variant: "default",
        });
        console.log("Registration successful:", data);
        //creates the user profile after sign up
        const userId = data?.userId;
        // localStorage.setItem("userId", userId);
        const response = await fetch(
          "https://smart-care-profile.onrender.com/api/smart_care/create_profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId,
            }),
          }
        );

        router.push("/login");
      } else {
        // Handle registration error
        setError(data.message || "Registration failed. Please try again.");
        setError({
          message: data.message,
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          otp: "",
        });
      }
    } catch (err) {
      // setError("An error occurred. Please try again.");
      setError({
        message: "An error occurred. Please try again.",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        otp: "",
      });
    } finally {
      setIsLoading(false);
      setOtpSent(false);
    }
  };

  const activeForm = () => {
    if (form === 0) {
      return (
        <RegisterForm
          isLoading={isLoading}
          setForm={setForm}
          name={name}
          setEmail={setEmail}
          setName={setName}
          form={form}
          password={password}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          confirmPassword={confirmPassword}
          email={email}
          error={error}
          handleSubmit={handleSendOtp}
        />
      );
    } else {
      return (
        <>
          <OtpForm
            handleSubmit={handleSubmit}
            email={email}
            otp={otp}
            error={error}
            isLoading={isLoading}
            setOtp={setOtp}
          />
        </>
      );
    }
  };

  if (otpSent) {
    return <FullPageLoader />;
  }

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
          {activeForm()}
        </div>
        <div className="hidden md:flex">
          {" "}
          <Image src={"/botchatimage.png"} alt={""} width={500} height={500} />
        </div>
      </div>
 
  );
}
