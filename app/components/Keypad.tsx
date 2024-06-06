"use client"
import {useState} from "react";
import { useRouter } from 'next/navigation';

import {Button} from "@/components/ui/button";

const Keypad = () => {
	const [value, setValue] = useState('0.00');
	const router = useRouter();
	const handleButtonClick = (char:any) => {
		if (char === '.' && value.includes('.')) return;
		if (value === '0.00') setValue(char === '.' ? '0.' : char);
		else setValue(value + char);
	};

	const handleDelete = () => {
		if (value.length > 1) {
			setValue(value.slice(0, -1));
		} else {
			setValue('0.00');
		}
	};

	const changeRoute = () => {
		router.push('/sale');
	}

	return(
		<div>
			<div>
				<h1 className='text-6xl	font-bold pb-6 pt-5'><span>$</span><span>{value}</span></h1>
			</div>
			<div className='mb-2'>
				<Button variant='outline' className='w-full'>+ Note</Button>
			</div>
			<div className='grid grid-cols-3'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
					<Button key={num} variant="ghost" onClick={() => handleButtonClick(num.toString())}>
						{num}
					</Button>
				))}
				<Button variant="ghost" onClick={() => handleButtonClick('.')}>.</Button>
				<Button variant="ghost" onClick={() => handleButtonClick('0')}>0</Button>
				<Button variant="ghost" onClick={handleDelete}>DEL</Button>
			</div>
			<div className='mt-4'>
				<Button className='w-full' onClick={changeRoute}>Charge $0.00</Button>
			</div>
		</div>
	)
}

export default Keypad