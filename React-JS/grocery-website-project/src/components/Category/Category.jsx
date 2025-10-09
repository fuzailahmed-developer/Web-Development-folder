import React from 'react'
import CommonHeading from '../Heading/CommonHeading'
import FruitsCat from "../../assets/Images/fruits-and-veggies.png"
import DairyCat from "../../assets/Images/dairy-and-eggs.png"
import SeafoodCat from "../../assets/Images/meat-and-seafood.png"
import CommonBtn from '../Button/CommonBtn'
const Category = () => {

    const category = [
        {
            id: 1,
            title: 'Fruits & Veggies',
            description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
            image: FruitsCat
        },
        {
            id: 2,
            title: 'Dairy & Eggs',
            description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
            image: DairyCat
        },
        {
            id: 3,
            title: 'Meat & Seafood',
            description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
            image: SeafoodCat
        },
    ]

    return (
        <section>
            <div className='pt-5 pb-20 px-10 mx-auto max-w-[1400px]'>
                <CommonHeading highlightedText="Shop" simpleText="by Category" />
                <div className='flex gap-x-10 mt-10 flex-wrap gap-y-5'>
                    {
                        category.map((card) => (
                            <div className='flex-1 rounded-xl overflow-hidden flex flex-col mt-auto basis-[300px]' key={card.id}>
                                <div>
                                    <img src={card.image} alt="img" />
                                </div>
                                <div className='bg-linear-to-b from-transparent to-zinc-100 p-8 pb-5'>
                                    <h3 className=' text-xl md:text-2xl font-bold text-zinc-800'>{card.title}</h3>
                                    <p className='mb-4 mt-2 text-zinc-600'>{card.description}</p>
                                    <CommonBtn text='See All' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category


