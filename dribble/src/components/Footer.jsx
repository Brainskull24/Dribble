import React from 'react'
import logo from "../../public/logo.webp"
import appstore from "../../public/appstore.png"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex flex-col mx-20 border-t-2 border-slate-200 items-center gap-2 py-10'>
        <Image src={logo} width={50} height={50} className="rounded-xl" />
        <span className='text-2xl text-purple-700 font-bold'>ahead</span>
        <div className='flex mt-5 justify-evenly w-1/2'>
            <span className=''>AuguststraBe 26, 10117 Berlin</span>
            <span>hi@ahead-app.com</span>
        </div>
        <Image src={appstore} width={150} height={150} className="rounded-xl mt-5" />
        <span className='text-sm mt-5'>2022 Ahead app. All right reserved</span>
    </div>
  )
}

export default Footer