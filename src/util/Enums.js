export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}

export const THEMES_STYLE = {
    [THEMES.LIGHT]: {
        spacing: '8px',
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
                },
                transition: 'all 0.5s ease-in-out'
            }
        }

    },
    [THEMES.DARK]: {
        spacing: '8px',
        appBar: {
            static: {
                backgroundColor: '#1b262c'
            },
            sticky: {
                backgroundColor: '#1b262c',
                opacity: '0.9'
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
                },
                transition: 'all 0.3s ease-in-out'
            }
        },

    }
}

export const dataTypes = {
    quote: 'quote',
    paragraph: 'paragraph',
    code: 'code',
    table: 'table',
    list: 'list',
    linkTool: 'linkTool',
    image: 'image',
    raw: 'raw',
    header: 'header',
    checklist: 'checklist',
    delimiter: 'delimiter'
}