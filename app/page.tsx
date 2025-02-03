import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Brain, Heart, Shield, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className=" overflow-hidden bg-gradient-to-b from-primary/5 bg-[#E0EDF6] pt-16">
        <div className=" container mx-auto  flex flex-col  md:flex-row justify-center items-center  ">
          <div className="">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in">
              Your AI Health Assistant
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              SmartCare uses advanced AI to provide instant, reliable healthcare
              guidance. Get answers to your health questions anytime, anywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-left">
              <Button asChild size="lg" className="text-lg group">
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className=" ">
            <Image
              src="/landing-bot.png"
              alt="SmartCare AI Assistant"
             width={800}
             height={1000}
              className=" drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose SmartCare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI-Powered Assistance",
                description:
                  "Get instant answers to your health questions using advanced artificial intelligence.",
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Reliable Information",
                description:
                  "Access verified medical information from trusted healthcare sources.",
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "24/7 Availability",
                description:
                  "Get healthcare guidance whenever you need it, day or night.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              About SmartCare
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    SmartCare was developed as part of a final year project at
                    Moshood Abiola Polytechnic. Our mission is to bridge the gap
                    between individuals and healthcare professionals by
                    providing instant and reliable medical information at your
                    fingertips.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="relative h-[190px] rounded-lg overflow-hidden">
                        <Image
                          src="/ore.jpg"
                          alt="Adediran Oreoluwa - Developer"
                         width={500}
                         height={0}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Adediran Oreoluwa
                        </h3>
                        <p className="text-muted-foreground">Developer</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%2000.28.04_abc5ed97.jpg-oSqBqcTJZ2qSmid9Fo30To9u3o4J4G.jpeg"
                          alt="Mr. Oladimeji Ganiyu - Supervisor"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Mr. Oladimeji Ganiyu
                        </h3>
                        <p className="text-muted-foreground">
                          Project Supervisor
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-xl mb-2">Developer</h3>
                  <p className="text-muted-foreground">
                    Adediran Oreoluwa is a passionate software developer
                    dedicated to leveraging technology to improve lives. This
                    project represents his commitment to innovation and
                    problem-solving in the healthcare sector.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-xl mb-2">Supervision</h3>
                  <p className="text-muted-foreground">
                    Under the expert guidance of Mr. Oladimeji Ganiyu, this
                    project was successfully completed with a focus on creating
                    a practical solution for healthcare accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Benefits of Using SmartCare
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Instant access to healthcare information",
              "User-friendly interface for easy navigation",
              "Personalized health recommendations",
              "Secure and private conversations",
              "Regular updates with latest medical knowledge",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of users who trust SmartCare for their healthcare
              guidance needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/register">Create Free Account</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg text-primary border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/login" >Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} SmartCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
