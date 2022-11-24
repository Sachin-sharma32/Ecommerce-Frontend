import Testimonials from "../components/Testimonials"
import useCheckSession from "../hooks/useCheckSession"
import { getSession } from "next-auth/react"

const TestimonialsPage = ({data}) => {
  // useCheckSession();
  return (
    <Testimonials/>
  )
}

export default TestimonialsPage

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