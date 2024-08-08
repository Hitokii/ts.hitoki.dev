import { CustomRevealCard } from "@/components/ui/customRevealCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projets() {
  return (
    <Tabs defaultValue="1">
      <div className="flex gap-5 p-5 w-full">
        <TabsList className="w-[150px]">
          <TabsTrigger value="1">BlackJack - 08/12/22</TabsTrigger>
          <TabsTrigger value="2">Futur projet ici</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <CustomRevealCard
            title={<h1>BlackJack</h1>}
            subtitle={<p>HTML / JS / CSS</p>}
            description={
              <p>
                A simple BlackJack game made with HTML, CSS and JS. Play against
                the computer and try to win!
              </p>
            }
            link="https://github.com/Hitokii/Blackjack"
            img=""
            color="#fff dark:#000"
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
