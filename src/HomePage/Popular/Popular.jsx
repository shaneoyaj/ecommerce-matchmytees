import React from 'react'

const Popular = () => {
    return (
        <div className='mt-[137px] text-center container text-[#161616]'>
            <h4 className=' text-center uppercase font-staatliches '><span className='text-[32px]'>match these</span><br /><span className='text-[45px]'>popular sneakers</span></h4>
            <div className='mt-[40px] flex uppercase gap-[280px] justify-center text-[24px] font-staatliches'>
                <div className='flex flex-col'>

                    <h4 className='mb-[14px]'>Recently Added </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="212" height="4" viewBox="0 0 212 4" fill="none">
                        <path d="M0 1.78906H212" stroke="#161616" stroke-width="3" />
                    </svg>
                </div>
                <h4>Best Sellers</h4>

            </div>
            <svg className='mt-[-3px]' xmlns="http://www.w3.org/2000/svg" width="1600" height="3" viewBox="0 0 1600 3" fill="none">
                <path d="M0 1.78906L1600 1.78892" stroke="#D9D9D9" stroke-width="2" />
            </svg>
            <div className='grid grid-cols-5 grid-row-2 gap-x-[25px] gap-y-10 mt-[27px]'>

                <div className='flex flex-col items-center   text-center .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-center' src="images/ayon1.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike Jumping shoes classic</h3>
                </div>
                <div className='flex flex-col items-center  text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-center' src="images/ayon2.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike InfinityRN 4 vintage
                        premium</h3>
                </div>
                <div className='flex flex-col items-center  text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-center' src="images/ayon3.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike InfinityRN 4 vintage
                        premium</h3>
                </div>
                <div className='flex flex-col items-center  text-center .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-center' src="images/ayon4.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike InfinityRN 4 vintage
                        premium</h3>
                </div>
                <div className='flex flex-col items-center  text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-centertransform -scale-x-100' src="images/ayon5.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike Dunk Low Retro
                        Premium</h3>
                </div>
                <div className='flex flex-col items-center   text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-centertransform -scale-x-100' src="images/ayon6.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike Jumping shoes
                        classic </h3>
                </div>
                <div className='flex flex-col items-center   text-center .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-centertransform -scale-x-100' src="images/ayon7.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike InfinityRN 4 vintage
                        premium</h3>
                </div>
                <div className='flex flex-col items-center  text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-centertransform -scale-x-100' src="images/ayon8.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike InfinityRN 4 vintage
                        premium</h3>
                </div>
                <div className='flex flex-col items-center   text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-centertransform -scale-x-100' src="images/ayon9.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike InfinityRN 4 vintage
                        premium</h3>
                </div>
                <div className='flex flex-col items-center   text-center  .card-popular'>
                    <img className='w-[278px] h-[186px] object-cover object-centertransform -scale-x-100' src="images/ayon5.png" alt="" />
                    <h3 className='text-[20px] uppercase font-roboto  text-[#474747]'>Nike Dunk Low Retro
                        Premium</h3>
                </div>

            </div>

        </div>
    )
}

export default Popular