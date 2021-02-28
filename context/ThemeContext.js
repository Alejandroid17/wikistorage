import React, { useState } from "react"

export const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: () => { }
})


const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        let newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('theme', newTheme);
    }

    const value = { theme, toggleTheme };

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;