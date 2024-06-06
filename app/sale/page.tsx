
"use client"

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import {Button} from "@/components/ui/button";
import {useSelector} from "react-redux";

const Sale = () => {
	// @ts-ignore
	const {price} = useSelector((state) => state.price)

	const router = useRouter();
	const changeRoute = () => {
		router.push('/payment');
	}

	return(
		<section className='h-full flex flex-col'>
			<div className='main'>
				<header className='relative text-center mb-4'>
					<Link href='/' className='absolute left-0 p-0 m-0 h-auto'> <ArrowLeft/></Link>
					<p>Current sale</p>
				</header>
				<div className='mb-4'>
					<div className='flex justify-between border-b pt-5 pb-5'>
						<div className='font-medium'>Empty</div>
						<div>$20.00</div>
					</div>
					<div className='flex justify-between border-b pt-5 pb-5'>
						<div className='font-medium'>Empty</div>
						<div>$20.00</div>
					</div>
				</div>
				<div className='flex justify-end'>
					<Button variant='secondary'>Add discount</Button>
				</div>
			</div>
			<div className='mt-4'>
				<Button className='w-full' onClick={changeRoute}>Charge ${price}</Button>
			</div>
		</section>
	)
}

export default Sale