import { createContext, useContext, useState } from "react";

const UserContext=createContext();

export const UserProvider =(props) => {
    const[login,setLogin]=useState(false);

  return (
    <UserContext.Provider value={{login,setLogin}}>
        {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext=()=>useContext(UserContext);
