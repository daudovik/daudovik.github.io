"use client"
import Image from "next/image";
import Check from '@/public/check-circle.svg';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const Success = () => {
	const router = useRouter();

	const changeRoute = () => {
		router.push('/');
	}

	return(
		<section className='flex flex-col h-full'>
			<div className='main flex flex-col justify-center items-center'>
				<Image src={Check} alt='check'/>
				<p className='text-center text-2xl font-medium mt-2'>Payment received</p>
			</div>
			<div className='flex justify-center'>
				<Button variant='secondary' onClick={changeRoute}>New sale</Button>
			</div>
		</section>
	)
}

export default Success