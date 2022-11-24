import Image from "next/image";

const HowItWorks = () => {
    return (
        <div className=" p-10">
            <h2 className=" text-main-dark text-sm">HOW IT WORKS</h2>
            <h1 className=" text-3xl font-bold mb-20">
                Your daily does of health in 3 simple steps
            </h1>
            <div className="grid__container mb-20">
                <div className="w-full">
                    <h4 className="how__number">01</h4>
                    <h3 className="how__heading">
                        Tell us what you like (and what not)
                    </h3>
                    <p className="how__text">
                        Never again waste time thinking about what to eat!
                        Omnifood AI will create a 100% personalized weekly meal
                        plan just for you. It makes sure you get all the
                        nutrients and vitamins you need, no matter what diet you
                        follow!
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <Image
                        src="/img/app/app-screen-1.png"
                        width="150px"
                        height="300px"
                        alt="phone image"
                    />
                </div>
            </div>
            <div className="grid__container mb-20">
                <div className="w-full flex justify-center">
                    <Image
                        src="/img/app/app-screen-2.png"
                        width="150px"
                        height="300px"
                        alt="phone image"
                    />
                </div>
                <div className="w-full">
                    <h4 className="how__number">02</h4>
                    <h3 className="how__heading">
                        Approve your weekly meal plan
                    </h3>
                    <p className="how__text">
                        Once per week, approve the meal plan generated for you
                        by Omnifood AI. You can change ingredients, swap entire
                        meals, or even add your own recipes.
                    </p>
                </div>
            </div>
            <div className="grid__container">
                <div className="w-full">
                    <h4 className="how__number">03</h4>
                    <h3 className="how__heading">
                        Receive meals at convenient time
                    </h3>
                    <p className="how__text">
                        Best chefs in town will cook your selected meal every
                        day, and we will deliver it to your door whenever works
                        best for you. You can change delivery schedule and
                        address daily!
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <Image
                        src="/img/app/app-screen-3.png"
                        width="150px"
                        height="300px"
                        alt="phone image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
