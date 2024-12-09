import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <div className='w-full h-[663px] bg-[#F2F0F1]'>
                <div className='wrapper border-2 bg-[#F2F0F1] h-[663px] flex'>
                    <div className='flex flex-col'>
                        <div className='w-[577px] h-[173px] mt-[124px] text-[64px] font-bold leading-[64px]'>
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </div>
                        <div className='w-[596px] h-[33px] mt-[35px] text-[16px] leading-[22px] font-normal'>
                            <p>Browse through our diverse range of meticulously crafted garments,
                                designed to bring out your individuality and cater to your sense
                                of style.</p>
                        </div>

                        <button className='bg-black text-white w-[210px] h-[52px] rounded-[62px] mt-[35px]'>Shop Now</button>
                    </div>
                    <Image className='w-[50px] h-[50px] mt-[307px] bg-[#F2F0F1]' src="/hero section/small vector.png" alt="small vector"
                        width={56}
                        height={56} />

                    <Image className="w-[50%]" src="/hero section/hero 1.jpeg" alt="hero"
                        width={1440}
                        height={663}
                    />

                    <Image className='w-[50px] h-[50px] bg-[#F2F0F1] mr-[100px] mt-[50px]' src="/hero section/small vector.png" alt="star"
                        width={104}
                        height={104} />
                </div>

            </div>
            <div className='w-full bg-black'>
                <div className='wrapper h-[122px] bordder-2 border-white flex items-center justify-around'>
                    <div>
                        <Image className="w-[100] h-[50]" src="/hero section/versace logo.png" alt="versace"
                            width={166.48}
                            height={33.16} />
                    </div>

                    <div>
                        <Image src="/hero section/zara-logo-1 1.png" alt="zara"
                            width={91}
                            height={38} />
                    </div>

                    <div>
                        <Image src="/hero section/gucci-logo-1 1.png" alt="gucci"
                            width={156}
                            height={36} />
                    </div>

                    <div>
                        <Image src="/hero section/prada-logo-1 1.png" alt="prada"
                            width={194}
                            height={32} />
                    </div>

                    <div>
                        <Image src="/hero section/ck logo.png" alt="calvin klein"
                            width={206.79}
                            height={33.35} />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Hero