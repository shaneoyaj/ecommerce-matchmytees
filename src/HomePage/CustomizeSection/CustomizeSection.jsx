import React from 'react'

const CustomizeSection = () => {
    return (

        <div className='container flex justify-between  mx-[206px] mt-[143px]' >
            <div className='w-1/2 max-w-[576px] bg-[#ABECFB] h-[503px] rounded-[40px] '>
           
                <div className='flex flex-col'>
                    <img className='w-[400px] h-[258px] mt-[70px] ml-[70px]' src="../images/sneaker.svg" alt="" />
                   

                    <h4 className='bg-[#6ACFE7] mt-[55px] uppercase text-white text-[24px] font-staatliches  h-[66px]  flex items-center text-center justify-center w-full '>nike air jordan sneakers</h4>
                  <img className='absolute mt-[351px] ml-[516px] ' src="../images/shoeRound.svg" alt="" />
                </div>
            </div>


            <div className='flex flex-col justify-center gap-5'>
                <h2 className='text-[45px] font-staatliches leading-[55px]'>Customize Your Own Tees<br />With Match Your Sneakers</h2>
                <button className='text-[22px] text-[#000] font-roboto rounded-[8px] bg-[#FFE000] justify-between flex text-center items-center w-[583px] h-[57px] px-8'>
                    <h4>Search sneakers to match</h4>
                    <img src='images/searchlogo.svg'></img>
                </button>
                <p className='max-w-[611px] font-roboto text-xl flex-shrink-0'>Match your trendsetting sneakers with our extensive database featuring millions of products from renowned brands like Adidas, ASICS, Converse, Gucci, Jordan, Louis Vuitton, New Balance, Nike, Puma, Reebok, Saucony, Vans, and more. We seamlessly match your sneakers to an array of outfits, including T-shirts, hoodies, crop tops, and socks. Customize designs and colors to align perfectly with your sneaker theme, for a look that's uniquely yours.</p>
            </div>
        </div>

    )
}

export default CustomizeSection