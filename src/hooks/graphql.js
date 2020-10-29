import React, {useState, createContext, useContext, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import graphqlResolver from "../util/graphqlResolver";

const GraphqlContext = createContext(null)

const GraphqlProvider = ({children}) => {
    const getInstanceGQ = (instanceIdentifier) => {
        return graphqlResolver('getInstanceByIdentifier', {instanceIdentifier})
    }

    return (
        <GraphqlContext.Provider value={{getInstanceGQ}}>
            {children}
        </GraphqlContext.Provider>
    );
};

export const useGraphql = () => {
    return useContext(GraphqlContext)
}

GraphqlProvider.propTypes = {};

export default GraphqlProvider;