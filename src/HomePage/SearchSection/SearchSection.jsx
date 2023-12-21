    import React from 'react'

    const SearchSection = () => {
        return (
            <div className='text-center mt-[87px] container mx-auto'>
                <div>
                    <h2 className='text-[45px] font-staatliches text-center'>HOW IT WORKS</h2>
                    <div className='flex mt-[60px] mb-12 space-x-[180px]'>
                        <div className='flex flex-col items-center'>
                                <img src="/images/shoeGroup.svg" alt="" className=' w-[90px] h-[90px] mb-[49px]' />
                            <h2 className=' font-staatliches text-[32px] mb-[26px]'>LOCATE  YOUR  SNEAKERS</h2>
                            <p className='text-xl font-roboto'>Dive into our database of 100k+ sneakers and<br/>find the pairs that you have. From classic to<br/>the new releases we have it all</p>
                        </div>
                        <div className='flex flex-col items-center'>
                           
                                <img src="/images/paletteGroup.svg" alt="" className=' w-[90px] h-[90px] mb-[49px] ' />
                            
                            <h2 className=' font-staatliches text-[32px] mb-[26px]'>MATCH  THE  DESIGN  &  COLOR</h2>
                            <p className='text-xl font-roboto'>Experience the magic of color-matched<br /> outfits. Seek out a design that complements<br /> your sneakers from 50k+ designs.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                           
                                <img src="/images/tshirt.svg" alt="" className='w-[90px] h-[90px] mb-[49px] ' />

                            <h2 className=' font-staatliches text-[32px] mb-[26px]'>SEAMLESS  STYLE  DELIVERED</h2>
                            <p className='text-xl font-roboto'>Rest assured, we'll deliver the precise<br /> product you selected right to your doorstep.<br /> 100% color match guaranteed.</p>
                        </div>

                    </div>

                <button className='w-[405px] h-[55px] btn-color text-red-300 font-roboto text-[22px]  rounded-[8px]'>Start By Searching Your Sneakers</button>
                </div>
            </div>
        )
    }

    export default SearchSection;