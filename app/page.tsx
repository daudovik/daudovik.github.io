"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Library from "@/app/components/Library";
import Keypad from "@/app/components/Keypad";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {setPrice, setLabel} from '@/store/features/priceSlice'

export default function Home() {

  // @ts-ignore
  const {price} = useSelector((state) => state.price)

  const dispatch = useDispatch();
  const router = useRouter();
  const changeRoute = () => {
    router.push('/sale');
  }

  const changeValue = (price:string, label:string) => {
    dispatch(setPrice(price))
    if (label){
      dispatch(setLabel(label))
    } else {
      dispatch(setLabel('Item'))
    }
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
            <Keypad onValueChange={changeValue} price={price}/>
          </TabsContent>
          <TabsContent value="Favorites">Favorites</TabsContent>
        </Tabs>
      </div>
      <div className='mt-4'>
        <Button className='w-full' onClick={changeRoute}>Charge $<span>{price}</span></Button>
      </div>
    </section>
  );
}
