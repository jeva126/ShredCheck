import React from 'react';
import useGet from './hooks/useGet';
import axios from 'axios';

const AppContext = React.createContext({
    mountains: []
});

function AppContextProvider({ children }) {

    // Sets up the app to fetch the mountains from a REST API.
    const {
        data: mountains,
        isLoading: mountainsLoading
    } = useGet('/api/mountains', []);



    // The context value that will be supplied to any descendants of this component.
    const context = {
        mountains,
        mountainsLoading
    }

    // Wraps the given child components in a Provider for the above context.
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}

export {
    AppContext,
    AppContextProvider
};