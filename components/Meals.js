import Image from "next/image";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";

const Meals = () => {
    return (
        <div className="p-10 w-full leading-10">
            <div className="w-full flex flex-col justify-center items-center">
                <h3 className=" text-main">MEALS</h3>
                <h4 className=" text-3xl font-bold text-main-gray mb-20">
                    Omnifood AI chooses from 5,000+ recipes
                </h4>
            </div>
            <div className="grid__meals">
                <Link href="/meals/meal-item">
                    <div className="w-full shadow-lg rounded-xl overflow-hidden hover:-translate-y-4 duration-500 cursor-pointer">
                        <Image
                            src="/img/meals/meal-1.jpg"
                            width="1000px"
                            height="600px"
                            alt="meal"
                        />
                        <div className="p-3">
                            <h6 className=" text-xs bg-green w-fit rounded-xl p-1">
                                VEGETARIAN
                            </h6>
                            <h5 className=" text-lg font-semibold text-main-gray mb-6">
                                Japanese Gyozas
                            </h5>
                            <div className="">
                                <div className="flex gap-4 text-gray-light items-center">
                                    <LocalFireDepartmentIcon className=" text-main" />
                                    <p>650 claories</p>
                                </div>
                                <div className="flex gap-4 text-gray-light items-center">
                                    <RestaurantIcon className=" text-main" />
                                    <p>NutriScore &reg; 74</p>
                                </div>
                                <div className="flex gap-4 text-gray-light items-center">
                                    <StarBorderIcon className=" text-main" />
                                    <p>4.9 rating [537]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/meals/meal-item">
                    <div className="w-full shadow-lg rounded-xl overflow-hidden hover:-translate-y-4 duration-500 cursor-pointer">
                        <Image
                            src="/img/meals/meal-2.jpg"
                            width="1000px"
                            height="600px"
                            alt="meal"
                        />
                        <div className="p-3">
                            <div className="flex gap-2">
                                <h6 className=" text-xs bg-green w-fit rounded-xl p-1">
                                    VEGEAN
                                </h6>
                                <h6 className=" text-xs bg-yellow w-fit rounded-xl p-1">
                                    PALEO
                                </h6>
                            </div>
                            <h5 className=" text-lg font-semibold text-main-gray mb-6">
                                Avacardo Salad
                            </h5>
                            <div className="">
                                <div className="flex gap-4 text-gray-light items-center">
                                    <LocalFireDepartmentIcon className=" text-main" />
                                    <p>400 claories</p>
                                </div>
                                <div className="flex gap-4 text-gray-light items-center">
                                    <RestaurantIcon className=" text-main" />
                                    <p>NutriScore &reg; 92</p>
                                </div>
                                <div className="flex gap-4 text-gray-light items-center">
                                    <StarBorderIcon className=" text-main" />
                                    <p>4.8 rating [441]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/meals/meal-item'>
                <div className="w-full shadow-lg rounded-xl overflow-hidden hover:-translate-y-4 duration-500 cursor-pointer">
                    <Image
                        src="/img/meals/meal-1.jpg"
                        width="1000px"
                        height="600px"
                        alt="meal"
                    />
                    <div className="p-3">
                        <h6 className=" text-xs bg-green w-fit rounded-xl p-1">
                            VEGETARIAN
                        </h6>
                        <h5 className=" text-lg font-semibold text-main-gray mb-6">
                            Japanese Gyozas
                        </h5>
                        <div className="">
                            <div className="flex gap-4 text-gray-light items-center">
                                <LocalFireDepartmentIcon className=" text-main" />
                                <p>650 claories</p>
                            </div>
                            <div className="flex gap-4 text-gray-light items-center">
                                <RestaurantIcon className=" text-main" />
                                <p>NutriScore &reg; 74</p>
                            </div>
                            <div className="flex gap-4 text-gray-light items-center">
                                <StarBorderIcon className=" text-main" />
                                <p>4.9 rating [537]</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="w-full flex justify-center mt-10">
                <Link href="#">
                    <a className=" text-main border-b hover:border-white hover:text-main-dark duration-300">
                        See all recipes &rarr;
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Meals;
