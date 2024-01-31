import React, { createContext, useContext } from "react";

export const Themecontext=createContext({
    themecolor:'Light'
})


export const ThemeProvider=Themecontext.Provider

export default function useTheme(){

    return useContext(Themecontext)

}

