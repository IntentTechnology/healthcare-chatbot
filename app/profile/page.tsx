"use client";
import { Suspense, useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProfileForm from "@/components/ProfileForm";

export default function ProfilePage() {
  const [credentials, setCredentials] = useState({});
  useEffect(() => {
    const credentials = localStorage.getItem("credentials");
    if (credentials) {
      setCredentials(JSON.parse(credentials));
    }
  }, []);
  console.log(credentials)
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
     

          <ProfileForm credentials={credentials} />
      
      </main>
    </div>
  );
}
