import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import {signIn, signOut} from 'next-auth/react';
import { useSession } from "next-auth/react";
import { useState } from "react";

const SignIn = () => {

  const {data:session, status} = useSession();
  console.log(session)

  const [val, setVal] = useState("")

  const inputChangeHandler = (e) =>{
    console.log(val)
    setVal(e.target.value)
  }

    return (
        <div className={`signin__grid p-10 bg-main m-10 rounded-lg ${status === "loading" ? "loading" : "loaded"}`}>
            <div className=" mr-4 w-3/4">
                <h1 className=" text-3xl font-bold mb-4">
                    Get your first meal for free!
                </h1>
                <p className=" text-md text-main-gray leading-6 mb-8">
                    Healthy, tasty and hassle-free meals are waiting for you.
                    Start eating well today. You can cancel or pause anytime.
                    And the first meal is on us!
                </p>
                <form className="form__grid">
                    <input
                        className="bg-white w-70 h-14 border border-none rounded-lg py-2 pl-9 pr-3 shadow-sm outline-none"
                        placeholder="Full Name"
                        type="text"
                        name="name"
                        value={val}
                        onChange={inputChangeHandler}
                    />
                    <input
                        className="bg-white w-70 h-14 border border-none rounded-lg py-2 pl-9 pr-3 shadow-sm outline-none"
                        placeholder="Email Address"
                        type="email"
                        name="email"
                    />
                    <input
                        className="bg-white w-70 h-14 border border-none rounded-lg py-2 pl-9 pr-3 shadow-sm outline-none"
                        placeholder="Password"
                        type="password"
                        name="password"
                    />
                    <input
                        className="bg-white w-70 h-14 border border-none rounded-lg py-2 pl-9 pr-3 shadow-sm outline-none"
                        placeholder="Password Confirm"
                        type="password"
                        name="passwordConfirm"
                    />
                    <Button
                        variant="contained"
                        className=" rounded-xl bg-main-dark hover:bg-white hover:text-main-gray font-bold text-lg h-14 w-50"
                    >
                        Sign up now
                    </Button>
                </form>
            </div>
            <div className="flex flex-col justify-evenly gap-10">
                <Button
                    variant="contained"
                    className=" bg-white text-main-gray hover:text-white font-bold hover:bg-main-dark flex gap-4 w-50 h-14 rounded-lg"
                    onClick={()=>signIn("google")}

                >
                    <GoogleIcon /> Sign in with google
                </Button>
                <Button
                    variant="contained"
                    className=" bg-white text-main-gray hover:text-white font-bold hover:bg-main-dark flex gap-4 w-50 h-14 rounded-lg"
                    onClick={()=>{signIn("github")}}
                >
                    <GitHubIcon /> Sign in with github
                </Button>
                <Button
                    variant="contained"
                    className=" bg-white text-main-gray hover:text-white font-bold hover:bg-main-dark flex gap-4 w-50 h-14 rounded-lg"
                    onClick={()=>{signIn("facebook")}}
                >
                    <FacebookIcon /> Sign in with facebook
                </Button>
            </div>
        </div>
    );
};

export default SignIn;
