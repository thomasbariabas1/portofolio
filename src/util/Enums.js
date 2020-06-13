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
                backgroundColor: '#dcd6f7'
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
            }
        }
    }
}