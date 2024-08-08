"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  author: string;
  description: string;
  note: string;
}

let notifications = [
  {
    author: "Creeper",
    description: "*Tsssssss*",
    note: "Awww men!",
  },
  {
    author: "Dovahkiin",
    description: "Vous avez enfraint les lois de bordeciel.",
    note: "Fus Ro Dah!",
  },
  {
    author: "GladOS",
    description: "Neurotoxine détectée.",
    note: "The cake is a lie.",
  },
  {
    author: "Ryu",
    description: "↓↘→, ↓↘→, P",
    note: "Hadoken!",
  },
  {
    author: "Nyan Cat",
    description:
      "Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan ",
    note: "≋≋≋≋≋̯̫⌧̯̫(ˆ•̮ ̮•ˆ)",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ author, description, note }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-500 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row cursor-default items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{author}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{note}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedCommentList({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
