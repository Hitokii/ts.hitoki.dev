import { BookMarked, FolderGit2, Github, MessageSquare } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Particles from "../magicui/particles";
import AnimatedCommentList from "./commentList";
import { useState } from "react";

const [pagecount, setPagecount] = useState(0);

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
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FolderGit2,
    name: "Projets",
    description: "Voir mes projets les plus récents.",
    href: "#",
    cta: "Voir tous les projets",
    className: "col-span-3 lg:col-span-1",
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
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
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
    href: "#",
    cta: "Voir les avis",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedCommentList className="absolute right-2 top-4 h-[300px] w-[800px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: BookMarked,
    name: "Connaissances",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (<></>),
  },
  {
      Icon: "none",
      name: "Stacks Techniques",
      description: "Les outils utilisés pour la création de ce site.",
      href: "",
      cta: "",
      className: "md:max-xl:hidden col-span-3 lg:col-span-1 hover:scale-100",
      hoverable: false,
      background: (
        <>
        <div className="absolute flex flex-col place-content-around w-full h-[30vh] p-5">
            <div>Langage : TypeScript</div>
            <div>Framework : React</div>
            <div>Library : <a>ShadCN-ui</a> | <a href="">MagicUI</a></div>
            {/* <div>Database : Supabase</div> */}
            <div className="flex gap-2">Hosted via github-pages <Github/></div>
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
    }
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
