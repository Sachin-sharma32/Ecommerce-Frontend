import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="grid__container grid__users__test p-10 leading-8 mt-10">
            <div className="w-full">
                <h1 className=" text-main-dark font-md">TESTIMONIALS</h1>
                <h2 className=" text-4xl font-bold w-full mb-20">
                    Once you try it, you cannnot go back
                </h2>
                <div className="grid__test">
                    <div>
                        <Image
                            src="/img/customers/customer-1.jpg"
                            alt="customer"
                            width="50px"
                            height="50px"
                            className="rounded-full"
                        />
                        <p>
                            Inexpensive, healthy and great-tasting meals,
                            without even having to order manually! It feels
                            truly magical.
                        </p>
                        <p className=" font-semibold">- Dave Gryson</p>
                    </div>
                    <div>
                        <Image
                            src="/img/customers/customer-2.jpg"
                            alt="customer"
                            width="50px"
                            height="50px"
                            className=" rounded-full"
                        />
                        <p>
                            Omnifood is a life saver! I just started a company,
                            so there is no time for cooking. I could not live
                            without my daily meals now!
                        </p>
                        <p className=" font-semibold">- Dave Gryson</p>
                    </div>
                    <div>
                        <Image
                            src="/img/customers/customer-1.jpg"
                            alt="customer"
                            width="50px"
                            height="50px"
                            className=" rounded-full"
                        />
                        <p>
                            The AI algorithm is crazy good, it chooses the right
                            meals for me every time. It is amazing not to worry
                            about food anymore!
                        </p>
                        <p className=" font-semibold">- Ben Hadley</p>
                    </div>
                    <div>
                        <Image
                            src="/img/customers/customer-1.jpg"
                            alt="customer"
                            width="50px"
                            height="50px"
                            className=" rounded-full"
                        />
                        <p>
                            I got Omnifood for the whole family, and it frees up
                            so much time! Plus, everything is organic and vegan
                            and without plastic.
                        </p>
                        <p className=" font-semibold">- Hannah Smith</p>
                    </div>
                </div>
            </div>
            <div className="grid__images w-full">
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-1.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-2.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-3.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-4.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-5.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-6.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-7.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-8.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-9.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-10.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-11.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
                <div className=" overflow-hidden">
                    <Image
                        src="/img/gallery/gallery-12.jpg"
                        alt="gallary image"
                        width="200px"
                        height="200px"
                        className=" hover:scale-150 duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
