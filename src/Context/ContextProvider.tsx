import { useState } from "react";
import  { UserContext } from "./Context";
function ContextProvider({children}: {children: React.ReactNode})
{
const[isLoggedin,setLoggedin]=useState<boolean>(false);
const[signup,setSignup]=useState<boolean>(false);
const[username,setUsername]=useState<string>('');

    return(
        <UserContext.Provider value={{isLoggedin,setLoggedin,signup,setSignup,username,setUsername}}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextProvider;