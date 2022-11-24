import Image from "next/image";
import { Button } from "@mui/material";

const Hero = () => {

    
    return (
        <div className="p-10 hero">
            <div className=" w-full">
                <div>
                    <h1 className=" text-4xl font-bold text-main-gray mb-8">
                        A healthy meal delivered to your door, every single day
                    </h1>
                    <p className=" text-lg text-gray-light mb-6">
                        The smart 365-days-per-year food subscription that will
                        make you eat healthy again. Tailored to your personal
                        tastes and nutritional needs.
                    </p>
                </div>
                <div className="flex gap-10 mb-10">
                    <Button variant="contained" className=" bg-main font-bold hover:bg-main-dark">Start eating well</Button>
                    <Button variant="contained" className=" bg-white hover:bg-main text-main-gray hover:text-white">Learn more &#8595;</Button>
                </div>
                <div className="flex items-center gap-x-10">
                    <div>
                        <Image
                            src="/img/customers/customer-1.jpg"
                            width="40px"
                            height="40px"
                            alt="user"
                            className='hero__user__img'
                        />
                        <Image
                            src="/img/customers/customer-2.jpg"
                            width="40px"
                            height="40px"
                            alt="user"
                            className='hero__user__img'
                        />
                        <Image
                            src="/img/customers/customer-3.jpg"
                            width="40px"
                            height="40px"
                            alt="user"
                            className='hero__user__img'
                        />
                        <Image
                            src="/img/customers/customer-4.jpg"
                            width="40px"
                            height="40px"
                            alt="user"
                            className='hero__user__img'
                        />
                        <Image
                            src="/img/customers/customer-5.jpg"
                            width="40px"
                            height="40px"
                            alt="user"
                            className='hero__user__img'
                        />
                        <Image
                            src="/img/customers/customer-6.jpg"
                            width="40px"
                            height="40px"
                            alt="user"
                            className='hero__user__img'
                        />
                    </div>
                    <p>250,000+ meals delivered last year!</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
               <Image src='/img/hero.webp' width='400px' height='400px' alt="hero image"/>
            </div>
        </div>
    );
};

export default Hero;
