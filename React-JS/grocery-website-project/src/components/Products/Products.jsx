import React, { useState } from 'react'
import CommonHeading from '../Heading/CommonHeading'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState("All")
    return (
        <section>
            <div className='px-10 max-w-[1400px] mx-auto py-20'>
                <CommonHeading highlightedText={"Our"} simpleText={"Products"} />

                {/* tabs */}

                <div className='flex gap-x-3 justify-center py-9'>
                    {
                        categories.map((text, index) => (
                            <button
                                key={index}
                                className={`${activeTab == text ? "bg-orange-500 text-white" : "bg-zinc-100 text-zinc-800"} py-2 px-4 rounded-md cursor-pointer`}
                                onClick={() => setActiveTab(text)}>{text}
                                
                            </button>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Products