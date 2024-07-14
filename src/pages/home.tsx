"use client";

import BlurFade from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import ShinyButton from "@/components/magicui/shiny-button";
import WordPullUp from "@/components/magicui/word-pull-up";
import { HomeGrid } from "@/components/ui/homegrid";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useState } from "react";



export default function Home() {

  return (
      <>
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg p-5">
      <div className="flex p-5 md:max-lg:hidden">
      <BlurFade key={"Logo"} inView>
            <Logo />
          </BlurFade>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-white-500 bg-clip-text text-center text-8xl font-semibold text-transparent md:max-lg:text-white dark:from-white dark:to-black">
        <WordPullUp words=" Maxence Perlot" className="text-6xl" />
        <div className="grow"/>

      </span>
      </div>
      <HomeGrid />
      <DotPattern className={cn("[mask-image:radial-gradient(80vh_circle_at_center,black,transparent)] ",)}/>
    </div>

    </>
  )
}