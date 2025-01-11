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
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://smartcare-auth.onrender.com/api/smart_care/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginType: "regular",
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("userName", data.data.name);
        console.log("Login successful:", data);
        router.push("/dashboard");
      } else {
        // Handle login error
        setError(data.message || "Login failed. Please try again.");

        return toast({
          title: data.message,
          description: data?.error,
          variant: "destructive",
        });
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className=" py-2 flex flex-col  md:w-[400px]  gap-2">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
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
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button
          className="w-full flex gap-5 rounded-full  hover:bg-[#7DBCCE] hover:text-[#5D6D84] bg-[#7DBCCE] text-white"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "LOGIN NOW "}
          {isLoading ? <></> : <ArrowRightIcon />}
        </Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#65aabd] hover:underline">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
