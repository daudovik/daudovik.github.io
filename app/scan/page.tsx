"use client"

import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import Image from "next/image";
import QR from '@/public/qr-code.png'
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Scan = () => {

	const router = useRouter();
	const changeRoute = () => {
		router.push('/success');
	}

	useEffect(() => {
		setTimeout(() => {
			changeRoute()
		}, 5000)
	}, [])

	return(
		<section className='flex flex-col'>
			<header className='relative text-center mb-4'>
				<Link href='/invoice' className='absolute left-0 p-0 m-0 h-auto'> <ArrowLeft/></Link>
				<p>Waiting payment</p>
			</header>
			<div className='text-center grow py-16'>
				<h1 className='text-5xl font-bold'>$10.00</h1>
			</div>
			<div className='text-center'>
				<p className='text-brand'>Scan the code in your Telegram Wallet</p>
			</div>
			<div className='bg-slate-50	 rounded-3xl py-3 flex items-center justify-center'>
				<Image src={QR} alt='scan'/>
			</div>
		</section>
	)
}

export default Scan