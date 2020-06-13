export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}

export const THEMES_STYLE = {
    [THEMES.LIGHT]: {
        content: {
            width: '50%',
            margin: 'auto'
        },
        appBar: {
            static: {
                backgroundColor: '#f4eeff'
            },
            sticky: {
                backgroundColor: 'rgba(220,214,247,0.6)'
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
                backgroundColor: '#0f4c75'
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