import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import supabase from "@/services/supabase";
import { Dialog, DialogPanel, DialogTitle, Textarea } from "@headlessui/react";
import { useState } from "react";
import { Slider } from "./slider";

export const CommentModal = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const sendRating = async (
    title: string,
    author: string,
    note: number,
    text: string
  ) => {
    console.log("sending rating");
    const { data, error } = await supabase
      .from("avis")
      .insert([{ title: title, author: author, rating: note, text: text }])
      .select();

    if (error) console.log("error", error);
    else console.log("data", data);
  };

  return (
    <div>
      <Button
        variant={"outline"}
        className="text-3xl p-5 py-10 lg:py-1 lg:text-base hover:scale-105 transition-all"
        onClick={() => setOpen(true)}
      >
        Ajouter un avis
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium underline"
              >
                Ajouter un avis
              </DialogTitle>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                <Label htmlFor="title">Titre/Nom de projet</Label>
                <Input type="text" id="title" placeholder="Hitoki.dev" />
                <Label htmlFor="name">Nom/Prénom</Label>
                <Input type="text" id="name" placeholder="Perlot Maxence" />
                <Label htmlFor="note" className="py-1">
                  Note
                </Label>
                <div className="flex justify-between px-2">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                </div>
                <Slider max={5} min={1} step={1} className="pb-2" />
                <Label htmlFor="text">Texte</Label>
                <Textarea
                  className={"bg-background rounded p-2"}
                  id="text"
                  placeholder="voici un long texte"
                  maxLength={140}
                  onChange={(e) => setText(e.target.value)}
                />
                <p>{text.length}/140</p>
              </div>
              <div className="mt-4 gap-2 flex">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-700 hover:bg-red-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Annuler
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-lime-700 hover:bg-lime-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-lime-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-lime-700"
                  onClick={() => {
                    sendRating("Hitoki.dev", "Perlot Maxence", 5, text);
                    setOpen(false);
                  }}
                >
                  Envoyer mon avis!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
