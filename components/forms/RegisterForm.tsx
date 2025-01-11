// import { error } from 'console'
import Link from "next/link";
import { Input } from "../ui/input";
import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import PasswordValidation from "../PasswordValidation";

interface RegisterFormProps {
  form: number;
  setForm: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit?: any;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading?: boolean;
  otpSent?: boolean;
  error?:
    | {
        message: string;
        name: string;
        password: string;
        confirmPassword: string;
        email: string;
      }
    | undefined;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  handleSubmit,
  email,
  setEmail,
  name,
  form,
  setForm,
  setName,
  password,
  setPassword,
  setConfirmPassword,
  confirmPassword,
  isLoading,
  otpSent,
  error,
}) => {
  return (
    <Card className=" py-2 flex flex-col  md:w-[400px]  gap-2">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error?.email && (
                <p className="text-red-500 text-xs mt-2">{error?.email}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {error?.name && (
                <p className="text-red-500 text-xs mt-2">{error?.name}</p>
              )}
            </div>
            <PasswordValidation setPassword={setPassword} password={password} />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error?.password && (
                <p className="text-red-500 text-xs mt-2">{error?.password}</p>
              )}
            </div>
            {/* <div className="flex flex-col space-y-1.5">
            <Label htmlFor="otp">OTP</Label>
            <div className="flex space-x-2">
              <Input 
                id="otp" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                disabled={!otpSent}
              />
              <Button type="button" onClick={handleSendOtp} disabled={isLoading || otpSent}>
                {otpSent ? 'OTP Sent' : 'Send OTP'}
              </Button>
            </div>
          </div> */}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            className="w-full flex gap-5 rounded-full  hover:bg-[#7DBCCE] hover:text-[#5D6D84] bg-[#7DBCCE] text-white"
            onClick={handleSubmit}
            disabled={!email || !password || !name || !confirmPassword}
          >
            {isLoading ? "Registering..." : "REGISTER NOW "}
          </Button>

          <p className="mt-4">
            Already have an account?{" "}
            <Link href="/" className="text-[#65aabd] hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </>
    </Card>
  );
};

export default RegisterForm;
