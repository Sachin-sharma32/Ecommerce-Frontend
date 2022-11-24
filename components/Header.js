import { Fragment } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Header = () => {
    const { data: session, status } = useSession();
    console.log(session, status);

    const cartRef = useRef();

    const showCart = () => {
        //? 5
        //* use "classList" instead of "className"
        if (cartRef.current.classList.contains("translate-x-60")) {
            cartRef.current.classList.remove("translate-x-60");
            cartRef.current.classList.add("translate-x-0");
        } else if (cartRef.current.classList.contains("translate-x-0")) {
            cartRef.current.classList.add("translate-x-60");
            cartRef.current.classList.remove("translate-x-0");
        }
    };

    return (
        <div
            className={`flex items-center justify-between p-8 bg-main-lightest ${
                status === "loading" ? "loading" : "loaded"
            }`}
        >
            <div>
                <Link href="/">
                    <a>
                        <Image
                            src="/img/omnifood-logo.png"
                            alt="site logo"
                            width="150px"
                            height="20px"
                        />
                    </a>
                </Link>
            </div>
            <div className="flex gap-10 font-bold text-main-gray items-center">
                <ul className="flex gap-10 items-center">
                    {session && (
                        <li>
                            <Link href="/working">
                                <a>How it works</a>
                            </Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/meals">
                                <a>Meals</a>
                            </Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/testimonials">
                                <a>Testimonials</a>
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link href="/pricing">
                            <a>Pricing</a>
                        </Link>
                    </li>
                </ul>
                {!session && (
                    <Button
                        variant="contained"
                        className="bg-main font-bold hover:bg-main-dark"
                        href="/signin"
                    >
                        Sign up now
                    </Button>
                )}
                {session && (
                    <>
                        <Button
                            onClick={() => signOut()}
                            variant="contained"
                            className="bg-main font-bold hover:bg-main-dark"
                        >
                            Sign Out
                        </Button>
                        <div className=" flex items-center text-xs gap-2">
                            <img
                                src={session.user.image}
                                alt=""
                                className=" w-10 rounded-full"
                            />
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div>Welcome</div>
                                <div>{session.user.name}</div>
                            </div>
                        </div>
                    </>
                )}
                <div>
                    <ShoppingCartIcon
                        className=" cursor-pointer"
                        onClick={() => showCart()}
                    />
                    <div
                        className=" fixed w-50 top-24 right-0 bg-main-lightest p-2 translate-x-60 transition-all duration-300 h-[100vh] z-30 py-10"
                        ref={cartRef}
                    >
                        <CloseIcon
                            className=" text-black absolute top-0 right-0 cursor-pointer"
                            onClick={() => showCart()}
                        />
                        <div className="flex gap-10 mb-2">
                            <h5>Item 1</h5>
                            <div className="flex gap-2">
                                <AddIcon />
                                <span>1</span>
                                <RemoveIcon />
                            </div>
                        </div>
                        <div className="flex gap-10 mb-2">
                            <h5>Item 1</h5>
                            <div className="flex gap-2">
                                <AddIcon />
                                <span>1</span>
                                <RemoveIcon />
                            </div>
                        </div>
                        <div className="flex gap-10 mb-2">
                            <h5>Item 1</h5>
                            <div className="flex gap-2">
                                <AddIcon />
                                <span>1</span>
                                <RemoveIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
