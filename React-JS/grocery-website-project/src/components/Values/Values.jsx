import React from 'react'
import CommonHeading from '../Heading/CommonHeading'
import { IoMdHeart } from "react-icons/io";
import { FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import foodBasket from "../../assets/Images/basket-full-vegetables.png"
const Values = () => {

    const valueData = [
        {
            id: 1,
            title: "Trust",
            description: "It is a long established fact that a reader will be distracted by the readable",
            image: <IoMdHeart />
        },
        {
            id: 2,
            title: "Always Fresh",
            description: "It is a long established fact that a reader will be distracted by the readable.",
            image: <FaLeaf />
        },
        {
            id: 3,
            title: "Food Safety",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: <FaShieldAlt />
        },
        {
            id: 4,
            title: "100% Organic",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: <FaSeedling />
        },
    ]

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 pb-20 pt-5'>
                <CommonHeading highlightedText={"Our"} simpleText={"Values"} />
                <div className='flex md:flex-row flex-col lg:[&>*]:flex-1 gap-x-4 pt-15 gap-y-5'>
                    <div className='flex flex-col justify-between gap-y-5'>
                        {
                            valueData.slice(0, 2).map((item) => (
                                <div className='flex lg:flex-row-reverse lg:text-end gap-x-3 items-center' key={item.id}>
                                    <div>
                                        <span className='w-15 h-15 flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 rounded-full text-3xl text-white'>{item.image}</span>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-2xl font-bold text-zinc-800'>{item.title}</h3>
                                        <p className='text-zinc-600 text-sm'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='hidden lg:flex lg:min-h-[368px] lg:min-w-[343px] ' >
                        <img src={foodBasket} alt="foodBasket" className='w-[80%] mx-auto' />
                    </div>
                    <div className='flex flex-col justify-between gap-y-5'>
                        {
                            valueData.slice(2).map((item) => (
                                <div className='flex  gap-x-3 items-center' key={item.id}>
                                    <div>
                                        <span className='w-15 h-15 flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 rounded-full text-3xl text-white'>{item.image}</span>
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-2xl font-bold text-zinc-800'>{item.title}</h3>
                                        <p className='text-zinc-600 text-sm'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values