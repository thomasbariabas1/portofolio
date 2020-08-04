import React, {useState, createContext, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import API from "../api/API";

const PersonContext = createContext(null)

const PersonProvider = ({children}) => {
    const [person, setPerson] = useState(null)

    const getPerson = () => {
        return API.GetPerson().then((person)=> {
            setPerson(person)
            return person
        })
    }

    const savePerson = (data) => {
        return API.SavePerson(data)
    }

    return (
        <PersonContext.Provider value={{person, getPerson, savePerson}}>
            {children}
        </PersonContext.Provider>
    );
};

export const usePerson = () => {
    return useContext(PersonContext)
}

PersonProvider.propTypes = {

};

export default PersonProvider;