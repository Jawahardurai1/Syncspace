import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
type userContexttype={
     isLoggedin: boolean,
  setLoggedin: React.Dispatch<SetStateAction<boolean>>;

   signup: boolean,
  setSignup: React.Dispatch<SetStateAction<boolean>>;

  username: string,
  setUsername: React.Dispatch<SetStateAction<string>>;




}
export const UserContext = createContext<userContexttype|null>(null);