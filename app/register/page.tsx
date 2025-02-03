import Register from "@/components/Register";
import Image from "next/image";

export default function RegisterPage() {
  // In a real application, you would check if the user is authenticated
  // For this example, we'll just show the login page
  // If you want to simulate a logged-in state, uncomment the next line
  // redirect('/dashboard')

  return <Register />;
}
