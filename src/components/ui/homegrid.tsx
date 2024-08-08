import {
  BookMarkedIcon,
  FolderGit2,
  Github,
  MessageSquare,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Particles from "../magicui/particles";
import AnimatedCommentList from "./commentList";

const files = [
  {
    name: "JishoDiscord",
    body: "JishoDiscord est un plugin pour Discord qui permet de rechercher des mots en japonais.",
  },
  {
    name: "YummyNoodle",
    body: "Yummy Noodle est un projet scolaire qui consiste à créer un site web pour un restaurant fictif.",
  },
  {
    name: "Hitoki.dev",
    body: "Ce site est 'surprenament' un de mes projets haha.",
  },
  {
    name: "Music-App",
    body: "Une application de musique qui sert de widget pour Hyprland.",
  },
  {
    name: "Discord-Bot",
    body: "Quelques bots discord pour apprendre le JS.",
  },
  {
    name: "Aperture Science",
    body: "A Venir !",
  },
];

const features = [
  {
    Icon: FolderGit2,
    name: "Projets",
    description: "Voir mes projets les plus récents.",
    href: "#projets",
    cta: "Voir tous les projets",
    className: "col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
            onClick={() => (document.location.href = "#projets?p=" + f.name)}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: MessageSquare,
    name: "Avis",
    description: "Voir les avis des personnes qui ont utilisé mes services.",
    href: "/avis",
    cta: "Voir les avis",
    className: "col-span-2 lg:col-span-1",
    background: (
      <AnimatedCommentList className="absolute right-1/2 top-4 h-[300px] w-[400px] transform translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: "none",
    name: "Connaissances",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2 lg:col-span-1",
    background: (
      <div>
        <BookMarkedIcon className="absolute top-0 left-50 text-neutral-700 w-full h-full scale-50" />
      </div>
    ),
  },
  {
    Icon: "none",
    name: "Stacks Techniques",
    description: "Les outils utilisés pour la création de ce site.",
    href: "",
    cta: "",
    className: "col-span-1",
    hoverable: false,
    background: (
      <>
        <div className="absolute flex flex-col place-content-around p-5">
          <div>Langage : TypeScript</div>
          <div>Framework : React</div>
          <div>
            Library : <a href="#link">ShadCN-ui</a> |{" "}
            <a href="#link">MagicUI</a>
          </div>
          <div>Database : Supabase</div>
          <div className="flex gap-2">
            Hosted via github-pages <Github />
          </div>
        </div>
        <Particles
          className="absolute inset-0 z-10"
          quantity={500}
          ease={20}
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          refresh
        />
      </>
    ),
  },
  {
    Icon: "none",
    name: "",
    description: "",
    href: "#",
    cta: "",
    className: "col-span-1 lg:col-span-1 text-2xl",
    background: (
      <pre className="text-center p-5">
        .<br />
        / \<br />
        / \<br />
        /^. \<br />
        / .-. \<br />
        / ( ) _\
        <br />
        / _.~ ~._^\
        <br />
        /.^ ^.\
        <br />
        <br />I use Arch btw.
      </pre>
    ),
  },
];

export function HomeGrid() {
  return (
    <BentoGrid className="h-full">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
