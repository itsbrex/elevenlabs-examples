import { ElevenLabsLogo, GithubLogo } from "@/components/logos";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { BackgroundWave } from "@/components/background-wave";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const maxDuration = 60; // Applies to the actions

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "X to Voice | ElevenLabs",
  description: "Analyze your X profile to generate a unique voice using ElevenLabs' new Voice Design feature",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <nav className={"sm:fixed w-full top-0 left-0 flex items-center justify-between py-4 px-8"}>
      <div className={"flex"}>
        <Link href={"/"} prefetch={true}><ElevenLabsLogo
          className={"h-[15px] w-auto hover:text-gray-500"} /></Link>
      </div>
      <div className={"flex gap-4"}>
        <Link
          href="https://elevenlabs.io/app/sign-in"
          target="_blank"
          aria-label="View source on GitHub"
        >
          <Button
            variant={"secondary"}
            size={"xs"}
            className="rounded-full z-50 text-sm text-gray-800"
          >
            Sign up
          </Button>
        </Link>
        <Link
          href="https://github.com/elevenlabs/elevenlabs-examples/tree/main/examples/text-to-voice/x-to-voice"
          target="_blank"
          rel="noopener noreferrer"
          className={"py-0.5"}
          aria-label="View source on GitHub"
        >
          <GithubLogo className={"w-5 h-5 hover:text-gray-500 text-[#24292f]"}></GithubLogo>
        </Link>
      </div>
    </nav>

    <div className="flex flex-col min-h-screen w-full items-center justify-center px-4">
      {children}
      <BackgroundWave />
    </div>
    <Toaster />
    <Analytics />
    </body>
    </html>
  );
}
