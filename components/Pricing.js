import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";
import AppleIcon from "@mui/icons-material/Apple";
import SpaIcon from "@mui/icons-material/Spa";

const Pricing = () => {
    return (
        <div className=" p-10">
            <h1 className="text-main-dark mb-2">PRICING</h1>
            <h2 className=" text-2xl font-bold mb-20">
                Eating well without breaking the bank
            </h2>
            <div className="grid__pricing">
                <div className="border-4 border-main-lightest rounded-lg p-10">
                    <div className="flex justify-center flex-col items-center">
                        <h4 className=" font-bold text-main mb-2">STARTER</h4>
                        <h3 className=" text-5xl font-bold mb-2">$ 399</h3>
                        <p className=" text-xs mb-8">
                            per month. That is just $13 per meal!
                        </p>
                    </div>
                    <div className=" mb-8 leading-10 text-sm">
                        <div className=" flex gap-2 items-center">
                            <DoneIcon className=" text-main" />
                            <p>1 meal per day</p>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <DoneIcon className=" text-main" />
                            <p>Order from 11am to 9pm</p>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <DoneIcon className=" text-main" />
                            <p>Delivery is free</p>
                        </div>
                        <div>
                            <ClearIcon className="text-main" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Button
                            variant="contained"
                            className=" bg-main hover:bg-main-dark"
                        >
                            Start eating well
                        </Button>
                    </div>
                </div>
                <div className="border-4 border-main-lightest rounded-lg p-10 bg-main-lightest hover:bg-white duration-300">
                    <div className="flex justify-center flex-col items-center">
                        <h4 className=" font-bold text-main mb-2">COMPLETE</h4>
                        <h3 className=" text-5xl font-bold mb-2">$ 549</h3>
                        <p className=" text-xs mb-8">
                            per month. That is just $11 per meal!
                        </p>
                    </div>
                    <div className=" mb-8 leading-10 text-sm">
                        <div className=" flex gap-2 items-center">
                            <DoneIcon className=" text-main" />
                            <p>2 meal per day</p>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <DoneIcon className=" text-main" />
                            <p>Order 24/7</p>
                        </div>
                        <div className=" flex gap-2 items-center">
                            <DoneIcon className=" text-main" />
                            <p>Delivery is free</p>
                        </div>
                        <div className="flex items-center gap">
                            <ClearIcon className="text-main" />
                            <p>Get access to latest recipes</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Button
                            variant="contained"
                            className=" bg-main hover:bg-main-dark"
                        >
                            Start eating well
                        </Button>
                    </div>
                </div>
            </div>

            <p className="w-full text-center mt-6 mb-20 text-sm">
                Prices include all applicable taxes. You can cancel at any time.
                Both plans include the following:
            </p>
            <div className="grid__pricing__features">
                <div>
                    <div className=" bg-main-lightest h-20 w-20 flex justify-center items-center rounded-full mb-4">
                        <ChairIcon className=" text-main" />
                    </div>
                    <h5 className=" font-semibold text-lg text-main-gray">Never cook again!</h5>
                    <p className=" text-sm mt-2">
                        Our cooks only use local, fresh, and organic products to
                        prepare your meals
                    </p>
                </div>
                <div>
                    <div className=" bg-main-lightest h-20 w-20 flex justify-center items-center rounded-full mb-4">
                        <AppleIcon className=" text-main" />
                    </div>
                    <h5 className=" font-semibold text-lg text-main-gray">Local and organic</h5>
                    <p className=" text-sm mt-2">
                        Our subscriptions cover 365 days per year, even
                        including major holidays.
                    </p>
                </div>
                <div>
                    <div className=" bg-main-lightest h-20 w-20 flex justify-center items-center rounded-full mb-4">
                        <SpaIcon className=" text-main" />
                    </div>
                    <h5 className=" font-semibold text-lg text-main-gray">No waste</h5>
                    <p className=" text-sm mt-2">
                        All our partners only use reusable containers to package
                        all your meals.
                    </p>
                </div>
                <div>
                    <div className=" bg-main-lightest h-20 w-20 flex justify-center items-center rounded-full mb-4">
                        <ChairIcon className="text-main"/>
                    </div>
                    <h5 className=" font-semibold text-lg text-main-gray">Pause anytime</h5>
                    <p className=" text-sm mt-2">
                        Going on vacation? Just pause your subscription, and we
                        refund unused days.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
