import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { ReactElement } from "react";

export const CustomRevealCard = ({
  title,
  subtitle,
  description,
  link,
  img,
  color,
}: {
  title: ReactElement;
  subtitle: ReactElement;
  description: ReactElement;
  link: string;
  img: string;
  color: string;
}) => {
  return (
    <div className="flex w-full">
      <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
        <BoxReveal boxColor={color} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">{title}</p>
        </BoxReveal>
        <BoxReveal boxColor={color} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">{subtitle}</h2>
        </BoxReveal>
        <BoxReveal boxColor={color} duration={0.5}>
          <div className="mt-[1.5rem]">{description}</div>
        </BoxReveal>

        <BoxReveal boxColor={color} duration={0.5}>
          <Button
            className="mt-[1.6rem] dark:bg-white bg-slate-600 text-black"
            onClick={() => (document.location.href = link)}
          >
            <GithubIcon />
            GitHub
          </Button>
        </BoxReveal>
      </div>
      <img src="chrome://branding/content/about-logo.png" alt="" />
    </div>
  );
};
