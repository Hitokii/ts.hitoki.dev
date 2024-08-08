"use client";

import DotPattern from "@/components/magicui/dot-pattern";
import { HomeGrid } from "@/components/ui/homegrid";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg p-5">
      <HomeGrid />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(80vh_circle_at_center,black,transparent)] -z-10 "
        )}
      />
    </div>
  );
}
