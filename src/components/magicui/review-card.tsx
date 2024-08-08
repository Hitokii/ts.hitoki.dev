import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ReviewCard = ({
  img,
  name,
  note,
  username,
  body,
}: {
  img: string;
  name: string;
  note: number;
  username: string;
  body: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <figure
      className={cn(
        "relative w-64 h-[20vh] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      onClick={() => setOpen(true)}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          style={img === "none" ? { display: "none" } : undefined}
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-2xl lg:text-lg font-medium dark:text-white">
            {name}
          </figcaption>

          <p className="text-xl lg:text-lg font-medium dark:text-white/40">
            <span className="text-sm sm:text-lg">{username}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{note}/5</span>
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-2xl lg:text-base text-wrap line-clamp-2">
        {body}
      </blockquote>
    </figure>
  );
};
