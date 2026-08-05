import { useState } from "react";
import  { UserContext } from "./Context";
function ContextProvider({children}: {children: React.ReactNode})
{
const[isLoggedin,setLoggedin]=useState<boolean>(false);

    return(
        <UserContext.Provider value={{isLoggedin,setLoggedin}}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextProvider;