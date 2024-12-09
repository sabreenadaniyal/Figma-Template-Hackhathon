import React from 'react'
import Image from 'next/image'

const Dressstyle = () => {
    return (
        <div className='h-[866px] wrapper bg-[#F0F0F0] mt-[200px] rounded-2xl'>
            <div className='flex justify-center'>
                <Image src="/hero section/dress STYLE.png" width={687} height={58} alt="Dress Style" className='mt-20' />
            </div>
            <div className='flex flex-col gap-6 ml-6'>
                <div className='w-[1091px] flex gap-20 mt-10  = '>
                    <div className='w-[407px] h-[289] flex bg-white rounded-[20px] gap-2 ml-10' >
                        <p className='relative top-5 left-14  text-[36px] font-bold'>Casual</p>
                        <Image src="/hero section/casual.jpg" width={300} height={300} alt="Casual Design" className='rounded-[20px]' />
                    </div>
                    <div className='w-[684px] h-[289px] flex rounded-[20px] bg-white'>
                        <p className='relative top-5 left-20 text-[36px] font-bold'>Formal</p>
                        <Image src="/hero section/formal.jpg" width={500} height={300} alt="Formal Design" className='rounded-[20px]' />
                    </div>
                </div>

                <div className='w-[1091px] flex'>

                    <div className='w-[684px] h-[289px] flex rounded-[20px] bg-white ml-10'>
                        <p className='relative top-5 left-20 text-[36px] font-bold'>Party</p>
                        <Image src="/hero section/party.jpg" width={600} height={300} alt="Formal Design" className='rounded-[20px]'/>
                    </div>
                    <div className='w-[407px] h-[289] flex bg-white rounded-[20px] gap-2 ml-28' >
                        <p className='relative top-5 left-14  text-[36px] font-bold'></p>
                        <Image src="/hero section/gym.jpg" width={452} height={677} alt="Casual Design" />
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Dressstyle