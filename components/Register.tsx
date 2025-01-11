"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function Register() {
  const [form, setForm] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();

  const handleSendOtp = async () => {
    setError("");
    setIsLoading(true);

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
      if (response.ok) {
        // Handle successful registration
        console.log("Registration successful:", data);
        setForm(1);
      } else {
        // Handle registration error
        setError(data.error?.name || "Registration failed. Please try again.");
      }
      setOtpSent(true);
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

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

      if (response.ok) {
        // Handle successful registration
        console.log("Registration successful:", data);
        router.push("/login");
      } else {
        // Handle registration error
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
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
        <OtpForm
          handleSubmit={handleSubmit}
          email={email}
          otp={otp}
          error={error}
          isLoading={isLoading}
          setOtp={setOtp}
        />
      );
    }
  };

  return <>{activeForm()}</>;
}
