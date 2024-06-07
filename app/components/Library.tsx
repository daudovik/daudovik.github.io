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

import Ripple from "@/components/Riple";
import {useState} from "react";

// @ts-ignore
const RippleElement = ({ children, onClick }) => {
	const [ripples, setRipples] = useState([]);

	const createRipple = (event:any) => {
		const { clientX, clientY, currentTarget } = event;
		const rect = currentTarget.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const newRipple = { x, y, key: Date.now() };
		// @ts-ignore
		setRipples((prevState) => [...prevState, newRipple]);


		setTimeout(() => {
			// @ts-ignore
			setRipples((prevState) => prevState.filter(ripple => ripple.key !== newRipple.key));
		}, 600);
	};

	return (
		<div
			className='relative overflow-hidden border px-4 py-2 flex justify-between items-center mb-1'
			onClick={(e) => {
				createRipple(e);
				onClick(e);
			}}>
			{ripples.map(({ x, y, key }) => (
				<Ripple key={key} x={x} y={y} />
			))}
			{children}
		</div>
	);
};

const Library = ({changeValue} : any) => {


	return(
		<>
			<div className='flex items-center rounded-md border border-input bg-background overflow-hidden'>
				<Button
					className='hover:bg-inherit hover:text-accent-foreground focus-visible:ring-0 focus-visible:none focus-visible:ring-offset-0'
					variant='ghost'>
					<Search/>
				</Button>
				<Input
					placeholder='Type a command or search...'
					className='border-none focus-visible:ring-0 focus-visible:none focus-visible:ring-none'
				/>
			</div>
			<div className='mt-2 mb-4'>
				{[
					{price: '5.00', label: 'Americano', imgSrc: Cofie1},
					{price: '7.00', label: 'Latte', imgSrc: Cofie2},
					{price: '7.00', label: 'Flat White', imgSrc: Cofie3},
					{price: '7.00', label: 'Capuchino', imgSrc: Cofie4},
					{price: '4.00', label: 'Espresso', imgSrc: Cofie5},
				].map(({price, label, imgSrc}, index) => (
					<RippleElement key={index} onClick={() => changeValue(price, label)}>
						<div className='flex items-center gap-2'>
							<div className='w-[48px]'>
								<Image src={imgSrc} alt={label}/>
							</div>
							<h2 className='font-medium'>{label}</h2>
						</div>
						<div>
							<p>${price}</p>
						</div>
					</RippleElement>
				))}
			</div>
			<div className='flex justify-center'>
				<Button variant='secondary'>Add new item</Button>
			</div>
		</>
	)
}
export default Library



