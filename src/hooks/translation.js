import React, {useContext, useState} from 'react'

const TranslationContext = React.createContext('gr');

const LanguageProvider = ({children}) => {
    const contextLang = React.useContext(TranslationContext)

    const [lang, setLang] = useState(contextLang)

    const changeLanguage = (newLang) => {

        setLang(newLang)
    }

    const t = (key) => {
        try {
            const translation = require(`../assets/transaltions/${lang}.json`)
            if(!translation[key]) {
                return key
            }

            return translation[key]
        } catch(err) {
            return key
        }
    }


    return <TranslationContext.Provider value={{lang, changeLanguage, t}}>
        {children}
    </TranslationContext.Provider>
}

export const useTranslation = () => {
    return useContext(TranslationContext)
}
export  {LanguageProvider, TranslationContext}