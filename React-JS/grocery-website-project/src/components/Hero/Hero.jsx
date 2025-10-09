import React from 'react'
import HeroImg from "../../assets/Images/grocery.png"
import CommonBtn from '../Button/CommonBtn'

const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 pt-32 min-h-[100vh] lg:flex lg:justify-center'>
                {/* content container */}
                <div className='flex items-center lg:flex-row flex-col'>
                    {/* hero content */}
                    <div className='flex-1 lg:order-0 order-1'>
                        <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full mb-3 inline-block'>Export Best Quality...</span>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[75px] font-bold leading-none'>
                            Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City
                        </h1>
                        <p className='text-zinc-600 text-lg mt-5 mb-10 max-w-[500px]'>
                            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                        </p>
                        <CommonBtn text={"Shop Now"}/>
                    </div>

                    {/* hero img */}
                    <div className='flex-1'>
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero