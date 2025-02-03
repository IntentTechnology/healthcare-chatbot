"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProfileData {
  id: string;
  userId: string;
  country: string | null;
  phoneNumber: string | null;
  profilePhotoUrl: string | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function ProfileForm({ credentials }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("john.doe@example.com");
  // const [age, setAge] = useState("35")
  // const [height, setHeight] = useState("175")
  // const [weight, setWeight] = useState("70")
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `https://smart-care-profile.onrender.com/api/smart_care/get_profile/${credentials?.data?.id}`
        );
        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();
        const profile: ProfileData = data.data;

        if (profile.name) setName(profile.name);
        if (profile.profilePhotoUrl) setAvatarUrl(profile?.profilePhotoUrl);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [avatarUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to update the user's profile
    console.log("Profile update:", { name, email });
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await fetch(
        `https://smart-care-profile.onrender.com/api/smart_care/set_profile_photo/${credentials?.data?.id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload profile picture");
      }

      const data = await response.json();
      console.log(data);
      // if (data.data?.profilePhotoUrl) {
      //   setAvatarUrl(data.data.profilePhotoUrl);
      // }
      setShowSuccessDialog(true);
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    } finally {
      setIsUploading(false);
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={avatarUrl} alt="Profile picture" />
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {/* <div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={handleFileSelect}
                >
                  <Upload className="w-6 h-6 text-white" />
                </div> */}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleFileSelect}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  "Change Picture"
                )}
              </Button>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </CardFooter>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Picture Updated</DialogTitle>
            <DialogDescription>
              Your profile picture has been successfully updated.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccessDialog(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
