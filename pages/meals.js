import Meals from "../components/Meals";
import useCheckSession from "../hooks/useCheckSession";
import { getSession } from "next-auth/react";

const MealsPage = ({data}) =>{
  // useCheckSession();
  return(
    <Meals/>
  );
}

export default MealsPage;

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