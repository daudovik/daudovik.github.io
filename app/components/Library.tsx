"use client"

import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import {Button} from "@/components/ui/button";

import Cofie1  from '@/public/cofie/1.png';
import Cofie2  from '@/public/cofie/2.png';
import Cofie3  from '@/public/cofie/3.png';
import Cofie4  from '@/public/cofie/4.png';
import Cofie5  from '@/public/cofie/5.png';
import Image from "next/image";
import {useState} from "react";

const Library = ({changeValue} : any) => {
	return(
		<>
			<div className='flex items-center rounded-md border border-input bg-background overflow-hidden'>
				<Button
					className='hover:bg-inherit hover:text-accent-foreground focus-visible:ring-0 focus-visible:none focus-visible:ring-offset-0'
					variant='ghost'>
					<Search />
				</Button>
				<Input
					placeholder='Type a command or search...'
					className='border-none focus-visible:ring-0 focus-visible:none focus-visible:ring-none'
				/>
			</div>
			<div className='mt-2 mb-4'>
				<div className='border px-4 py-2 flex justify-between items-center mb-1' onClick={() => changeValue('5.00')}>
					<div className='flex items-center gap-2'>
						<div className='w-[48px]'>
							<Image src={Cofie1} alt='cofie'/>
						</div>
						<h2 className='font-medium'>Americano</h2>
					</div>
					<div>
						<p>$5.00</p>
					</div>
				</div>
				<div className='border px-4 py-2 flex justify-between items-center mb-1' onClick={() => changeValue('7.00')}>
					<div className='flex items-center gap-2'>
						<div className='w-[48px] '>
							<Image src={Cofie2} alt='cofie'/>
						</div>
						<h2 className='font-medium'>Latte</h2>
					</div>
					<div>
						<p>$7.00</p>
					</div>
				</div>
				<div className='border px-4 py-2 flex justify-between items-center mb-1' onClick={() => changeValue('7.00')}>
					<div className='flex items-center gap-2'>
						<div className='w-[48px] '>
							<Image src={Cofie3} alt='cofie'/>
						</div>
						<h2 className='font-medium'>Flat White</h2>
					</div>
					<div>
						<p>$7.00</p>
					</div>
				</div>
				<div className='border px-4 py-2 flex justify-between items-center mb-1' onClick={() => changeValue('7.00')}>
					<div className='flex items-center gap-2'>
						<div className='w-[48px] '>
							<Image src={Cofie4} alt='cofie'/>
						</div>
						<h2 className='font-medium'>Capuchino</h2>
					</div>
					<div>
						<p>$7.00</p>
					</div>
				</div>
				<div className='border px-4 py-2 flex justify-between items-center mb-1' onClick={() => changeValue('4.00')}>
					<div className='flex items-center gap-2'>
						<div className='w-[48px] '>
							<Image src={Cofie5} alt='cofie'/>
						</div>
						<h2 className='font-medium'>Espresso</h2>
					</div>
					<div>
						<p>$4.00</p>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<Button variant='secondary'>Add new item</Button>
			</div>
		</>
	)
}
export default Library



