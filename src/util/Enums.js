export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}

export const THEMES_STYLE = {
    [THEMES.LIGHT]: {
        appBar: {
            static: {
                backgroundColor: '#f4eeff'
            },
            sticky: {
                backgroundColor: '#f4eeff',
                opacity: '0.7'
            },
            links: {
                color:'black',
                cursor: 'pointer',
                margin: '0 4px',
                padding: '4px',
                opacity: '0.7',
                fontSize: '16px',
                '&:hover': {
                    opacity: '1',
                }
            }
        }

    },
    [THEMES.DARK]: {
        appBar: {
            static: {
                backgroundColor: '#1b262c'
            },
            sticky: {
                backgroundColor: '#1b262c',
                opacity: '0.7'
            },
            links: {
                color:'white',
                cursor: 'pointer',
                margin: '0 4px',
                padding: '4px',
                opacity: '0.7',
                fontSize: '16px',
                '&:hover': {
                    opacity: '1',
                }
            }
        },

    }
}