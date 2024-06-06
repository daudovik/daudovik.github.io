import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Library from "@/app/components/Library";
import Keypad from "@/app/components/Keypad";


export default function Home() {
  return (
    <section className='min-h-screen'>
      <Tabs defaultValue="Library" className="w-full">
        <TabsList className='w-full gap-3'>
          <TabsTrigger value="Library" >Library</TabsTrigger>
          <TabsTrigger value="Keypad" >Keypad</TabsTrigger>
          <TabsTrigger value="Favorites">Favorites</TabsTrigger>
        </TabsList>
        <TabsContent value="Library">
          <Library/>
        </TabsContent>
        <TabsContent value="Keypad">
          <Keypad/>
        </TabsContent>
        <TabsContent value="Favorites">Favorites</TabsContent>
      </Tabs>
    </section>
  );
}
