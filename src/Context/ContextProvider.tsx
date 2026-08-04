import  { UserContext } from "./Context";
function ContextProvider({children}: {children: React.ReactNode})
{

    return(
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextProvider;