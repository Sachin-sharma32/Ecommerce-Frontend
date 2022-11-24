import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

//? 3
//* using "custom hook" to redirect user to google singin if user has logged out
const useCheckSession = () => {
    const { data: session, status } = useSession();
    console.log(session)

    useEffect(() => {
        console.log('from hook')
        function checkSession() {
            if (!session) {
                signIn("google");
            }
        }
        checkSession();
    },[session]);
};

export default useCheckSession;
