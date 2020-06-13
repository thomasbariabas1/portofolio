import React, {useContext, useState} from 'react'
import {ThemeProvider as MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {THEMES, THEMES_STYLE} from "../util/Enums";

const ThemeContext = React.createContext(THEMES.LIGHT);

const ThemeProvider = ({children}) => {
    const contextTheme = React.useContext(ThemeContext)

    const [theme, setTheme] = useState(contextTheme)

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    }

    return <ThemeContext.Provider value={{theme, changeTheme}}>
        <MuiThemeProvider theme={createMuiTheme(THEMES_STYLE[theme])}>
            {children}
        </MuiThemeProvider>
    </ThemeContext.Provider>

}

export const useTheme = () => {
    return useContext(ThemeContext)
}

export {ThemeProvider, ThemeContext}