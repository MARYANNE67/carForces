'use client';
import Image from 'next/image'
import CustomButton from './CustomButton'

const Main = () => {
    const handleScroll = () =>
        {

    }
  return (
    <div className='main'>
        <div className='flex-1 pt-36 padding-x'>
           <h1 className='main__title'>
            Discover, Reserve, and Ride: Your Ultimate Car Showcase Experience
             </h1>

        <p className='main__subtitle'>
            Elevate your car rental journey with our seamless booking experience
        </p> 
     
        
        <CustomButton
        title="Explore availabe cars"
        btnType='button'
        containerStyles='bg-dark-theme-500
        text-white rounded-full mt-10 font-bold'
        handleClick={handleScroll}
        />
    </div>

    <div className='main__image-container'>
        <div className='main__image'>
            <Image src="/main.png" alt="White car" fill className='object-contain'/>
        </div>   
        <div className='main__image-overlay'/>
      
    </div>
    </div>
  )
}

export default Main