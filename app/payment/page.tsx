"use client"

import Link from "next/link";

import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import { ChevronRight } from 'lucide-react';
import {useRouter} from "next/navigation";

const Payment = () => {
	const router = useRouter();

	const changeRoute = () => {
		router.push('/invoice');
	}

	return(
		<section>
			<header className='relative text-center mb-4'>
				<Link href='/sale' className='absolute left-0 p-0 m-0 h-auto'> <ArrowLeft/></Link>
				<p>Payment method</p>
			</header>
			<div>
				<h1 className='text-6xl	font-bold pb-6 pt-5'>$10.00</h1>
			</div>
			<div className=''>
				<Button
					variant='ghost'
					className='w-full flex justify-between items-center border-b py-9 rounded-none'
					onClick={changeRoute}
				>
					<span className='font-bold'>USDT</span>
					<span> <ChevronRight /></span>
				</Button>
				<Button
					variant='ghost'
					className='w-full flex justify-between items-center border-b py-9 rounded-none'
					onClick={changeRoute}
				>
					<span className='font-bold'>TON</span>
					<span> <ChevronRight /></span>
				</Button>
				<Button
					variant='ghost'
					className='w-full flex justify-between items-center border-b py-9 rounded-none'
					onClick={changeRoute}
				>
					<span className='font-bold'>Bitcoin</span>
					<span> <ChevronRight /></span>
				</Button>
				<Button
					variant='ghost'
					className='w-full flex justify-between items-center border-b py-9 rounded-none'
					onClick={changeRoute}
				>
					<span className='font-bold'>Cash</span>
					<span> <ChevronRight /></span>
				</Button>
			</div>
		</section>
	)
}

export default Payment