"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Library from "@/app/components/Library";
import Keypad from "@/app/components/Keypad";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";


export default function Home() {

  const [value, setValue] = useState('0.00')

  const router = useRouter();
  const changeRoute = () => {
    router.push('/sale');
  }

  const changeValue = (v:any) => {
    setValue(v)
  }

  return (
    <section className='h-full flex flex-col'>
      <div className='main'>
        <Tabs defaultValue="Library" className="w-full">
          <TabsList className='w-full gap-3'>
            <TabsTrigger value="Library">Library</TabsTrigger>
            <TabsTrigger value="Keypad">Keypad</TabsTrigger>
            <TabsTrigger value="Favorites">Favorites</TabsTrigger>
          </TabsList>
          <TabsContent value="Library">
            <Library changeValue={changeValue}/>
          </TabsContent>
          <TabsContent value="Keypad">
            <Keypad onValueChange={changeValue}/>
          </TabsContent>
          <TabsContent value="Favorites">Favorites</TabsContent>
        </Tabs>
      </div>
      <div className='mt-4'>
        <Button className='w-full' onClick={changeRoute}>Charge $<span>{value}</span></Button>
      </div>
    </section>
  );
}
