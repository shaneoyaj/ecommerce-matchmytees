    import React from 'react'

    const SearchSection = () => {
        return (
            <div className='text-center mt-20 mx-[160px] '>
                <div>
                    <h2 className='text-[45px] font-staatliches text-center'>HOW IT WORKS</h2>
                    <div className='flex mt-[60px] mb-12 space-x-[180px]'>
                        <div className='flex flex-col items-center'>
                            <div className='items-center border border-2 rounded-full border-[#44C7FF] mb-[49px] w-[90px] h-[90px]'>
                                <img src="/images/shoe.svg" alt="" className=' w-[32px] h-[22px] m-7' />
                            </div>
                            <h2 className=' font-staatliches text-[32px] mb-[26px]'>LOCATE  YOUR  SNEAKERS</h2>
                            <p className='text-xl font-roboto'>Dive into our database of 100k+ sneakers and<br/>find the pairs that you have. From classic to<br/>the new releases we have it all</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='items-center border border-2 rounded-full border-[#FF3CDF] mb-[49px] w-[90px] h-[90px]'>
                                <img src="/images/palette.svg" alt="" className=' p-8 ' />
                            </div>
                            <h2 className=' font-staatliches text-[32px] mb-[26px]'>MATCH  THE  DESIGN  &  COLOR</h2>
                            <p className='text-xl font-roboto'>Experience the magic of color-matched<br /> outfits. Seek out a design that complements<br /> your sneakers from 50k+ designs.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' mb-[49px]'>
                                <img src="/images/tshirt.svg" alt="" className='w-[90px] h-[90px] ' />
                            </div>
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