import React, { useState } from "react";
import usercontext from "./Usercontext";

const UsercontextProvider = ({ children }) => {

    const [name, setname] = useState('Mohit Kaushik')

    console.log('UsercontextProvider - name:', name);

    return (

        <usercontext.Provider value={{name}}>
            {children}
        </usercontext.Provider>
    )

}

export default UsercontextProvider;


