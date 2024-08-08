import Marquee from "@/components/magicui/marquee";
import { ReviewCard } from "@/components/magicui/review-card";
import { CommentModal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/use-toast";
import getGravatarUrl from "@/services/avatar";
import supabase from "@/services/supabase";
import fakerator from "fakerator";
import { useEffect, useState } from "react";

export default function Avis() {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<any>([]);

  // Comments
  useEffect(() => {
    fetchComments();
  }, []);
  const { toast } = useToast();
  async function fetchComments() {
    const { data, error } = await supabase.from("avis").select();
    setComments(data);
    if (error) {
      console.error(error);
      toast({
        title: `Erreur ${error.code}`,
        description: "Impossible de charger les avis. Merci d'informer Maxence",
        variant: "destructive",
        className: "truncate",
      });
    }
  }

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg p-5">
      {/* Bar "ajouter un avis" */}
      <div className="grid justify-items-stretch p-5">
        <div className="justify-self-center lg:justify-self-end">
          <CommentModal />
        </div>
      </div>

      {/* Avis */}
      <div className="h-[70vh] w-full relative flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover>
          {comments?.map((comment: any) =>
            comment.id % 2 == 0 ? (
              <ReviewCard
                key={comment.id}
                body={comment.text}
                note={comment.rating}
                name={comment.title}
                username={comment.author}
                img={getGravatarUrl(comment.author)}
              />
            ) : null
          )}
        </Marquee>
        <Marquee pauseOnHover reverse>
          {comments?.map((comment: any) =>
            comment.id % 2 != 0 ? (
              <ReviewCard
                key={comment.id}
                body={comment.text}
                note={comment.rating}
                name={comment.title}
                username={comment.author}
                img={getGravatarUrl(comment.author)}
              />
            ) : null
          )}
        </Marquee>
      </div>
    </div>
  );
}
