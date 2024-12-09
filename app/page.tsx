import Image from "next/image";
import Hero from "./Components/Hero";
import ProductCards from "./Components/ProductCards";
import DressStyle from "./Components/DressStyle";
import HappyCustomer from "./Components/HappyCustomer";


export default function Home() {
  return (
    <div>
      
      <Hero /> <br /> <br /> <br />
      
      <Image src="/hero section/NEW ARRIVALS.png" width={403} height={58} alt="New Arrivals" className="wrapper mt-[100px] mb-[50px] " />
      <ProductCards>
        <div className='flex'>
          <div className="flex flex-col">
            <Image src="/hero section/shirt.jpg" alt="shirt" width={295} height={298} className="rounded-[20px]" />
            <h1 className="text-[20px]">T-SHIRT WITH TAPE DETAILS</h1>
            <span className="text-[14px] font-normal text-orange-500 ">&#9733;&#9733;&#9733;&#9733;&#9734;4.5/5</span>
            <span className="text-[24px] font-bold">$120</span>
          </div>

        </div>
        <div className="flex flex-col ml-5">
          <Image src="/hero section/bluepant.jpg" alt="shirt" width={265} height={298} className="rounded-[20px] " />
          <h1 className="text-[20px]">SKINNY FIT JEANS</h1>
          <span className="text-[14px] font-normal text-orange-500 ">&#9733;&#9733;&#9733;&#9733;&#9734;3.5/5</span>
          <div className="flex items-center">
            <span className="text-[24px] font-bold">$240 </span>
            <span className="line-through text-gray-400 ml-2 ">$160</span>
            <span className="bg-[#FF33331A] w-[58px] h-[28px] text-center text-red-400 text-[12px] rounded-[62px] ml-4 font-medium pt-[6px] ">-20%</span>
          </div>



        </div>
        <div className="flex flex-col">
          <Image src="/hero section/cheque shirt.jpg" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <h1 className="text-[20px]">CHECKERED SHIRT</h1>
          <span className="text-[14px] font-normal text-orange-500 ">&#9733;&#9733;&#9733;&#9733;&#9734;4.5/5</span>
          <span className="text-[24px] font-bold">$180</span>
        </div>
        <div className="flex flex-col">
          <Image src="/hero section/shirt 3.jpg" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <h1 className="text-[20px]">SLEEVE STRIPED T-SHIRT</h1>
          <span className="text-[14px] font-normal text-orange-500 ">&#9733;&#9733;&#9733;&#9733;&#9734;4.5/5</span>
          <div className="flex items-center">
            <span className="text-[24px] font-bold">$130 </span>
            <span className="line-through text-gray-400 ml-2 ">$160</span>
            <span className="bg-[#FF33331A] w-[58px] h-[28px] text-center text-red-400 text-[12px] rounded-[62px] ml-4 font-medium pt-[6px] ">-30%</span>
          </div>
        </div>
        <div className="wrapper pl-[490px] pt-14  " >
          <button className="w-[218px] h-[52px] rounded-[62px] border-2 border-gray-200">View All</button>
        </div>

      </ProductCards>  

      <Image src="/hero section/top selling.png" width={403} height={58} alt="New Arrivals" className="wrapper mt-[250px] mb-[50px]" />
       <ProductCards>
        
          <div className='flex'>
            <div className="flex flex-col">
              <Image src="/hero section/tshirt.jpg" alt="shirt" width={295} height={298} className="rounded-[20px]" />
              <h1 className="text-[20px]">VERTICAL STRIPED SHIRT</h1>
              <span className="text-[14px] font-normal">&#9733;&#9733;&#9733;&#9733;&#9734;5.0/5</span>
              <div className="flex items-center">
                <span className="text-[24px] font-bold">$212 </span>
                <span className="line-through text-gray-400 ml-2 ">$232</span>
                <span className="bg-[#FF33331A] w-[58px] h-[28px] text-center text-red-400 text-[12px] rounded-[62px] ml-4 font-medium pt-[6px] ">-20%</span>
              </div>
            </div>

          </div>
        
        <div className="flex flex-col ">
          <Image src="/hero section/orange shirt.jpg" alt="shirt" width={295} height={298} className="rounded-[20px] " />
          <h1 className="text-[20px]">COURAGE GRAPHIC T-SHIRT</h1>
          <span className="text-[14px] font-normal">&#9733;&#9733;&#9733;&#9733;&#9734;4.0/5</span>

          <span className="text-[24px] font-bold">$145 </span>

        </div>
        <div className="flex flex-col">
          <Image src="/hero section/shorts.jpg" alt="shirt" width={295} height={298} className="rounded-[20px]" />
          <h1 className="text-[20px]">LOOSE FIT BERMUDA SHORTS</h1>
          <span className="text-[14px] font-normal">&#9733;&#9733;&#9733;3.0/5</span>
          <span className="text-[24px] font-bold">$80</span>
        </div>
        <div className="flex flex-col">
          <Image src="/hero section/black pant.jpg" alt="shirt" width={250} height={280} className="rounded-[20px]" />
          <h1 className="text-[20px]">FADED SKINNY JEANS</h1>
          <span className="text-[14px] font-normal">&#9733;&#9733;&#9733;&#9733;&#9734;4.5/5</span>
          <span className="text-[24px] font-bold">$210 </span>

        </div>
        <div className="wrapper pl-[490px] pt-14  " >
          <button className="w-[218px] h-[52px] rounded-[62px] border-2 border-gray-200">View All</button>
        </div>
    

    </ProductCards>

    <DressStyle />
    <HappyCustomer />

  
   </div >
  );
}
