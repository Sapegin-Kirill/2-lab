import { useState, createContext, useEffect } from "react"
import React from 'react'

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if(theme == 'dark'){
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } 
        
        else{
            document.body.classList.add('light');
            document.body.classList.remove('dark');

        } 
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider