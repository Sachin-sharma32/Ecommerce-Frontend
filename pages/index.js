import Header from "../components/Header";
import Hero from "../components/Hero";
import useCheckSession from "../hooks/useCheckSession";
import { getSession } from "next-auth/react";

export default function Home() {
    // useCheckSession();

    return <Hero />;
}

export async function getServerSideProps(context){
    const session = await getSession(context);
    if(!session){
      return{
        redirect:{
          destination:'/pricing'
        }
      }
    }
    return{
      props:{
        data:" "
      }
    }
  }