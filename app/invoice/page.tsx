"use client"

import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const Invoice = () => {
	const router = useRouter();

	const changeRoute = () => {
		router.push('/scan');
	}
	return(
		<section className='flex flex-col h-full'>
			<header className='relative text-center mb-4'>
				<Link href='/payment' className='absolute left-0 p-0 m-0 h-auto'> <ArrowLeft/></Link>
				<p>Invoice information</p>
			</header>
			<div className="main">
				<div className='flex justify-center items-center h-full'>
					<p className='text-center py-5 text-2xl font-bold'>$10.00</p>
				</div>
			</div>
			<div className='mb-2'>
				<p>How would you like to share the invoice?</p>
			</div>
			<div className='flex flex-col gap-2'>
				<Button>Telegram</Button>
				<Button>Tex message</Button>
				<Button onClick={changeRoute}>No receipt</Button>
			</div>
		</section>
	)
}
export default Invoice