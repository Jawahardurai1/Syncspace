import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
type userContexttype={
     isLoggedin: boolean,
  setLoggedin: React.Dispatch<SetStateAction<boolean>>;




}
export const UserContext = createContext<userContexttype|null>(null);