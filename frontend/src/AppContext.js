import React from 'react';
import useGet from './hooks/useGet';
import axios from 'axios';

const AppContext = React.createContext({
    mountains: [],
    reviews:[]
});

function AppContextProvider({ children }) {

    // Sets up the app to fetch the data from a REST API.
    const {
        data: mountains,
        isLoading: mountainsLoading
    } = useGet('/api/mountains');

    const {
        data: reviews,
        isLoading: reviewsLoading
    } = useGet('/api/reviews');

    async function addReview(Name, Date, Description, Rating) {

        const reviewToUpload = {
            Name, 
            Date, 
            Description, 
            Rating
        };

        const reviewResponse = await axios.post('/api/reviews', reviewToUpload);

        return reviewResponse.data;
    }


    // The context value that will be supplied to any descendants of this component.
    const context = {
        mountains,
        mountainsLoading,
        reviews,
        reviewsLoading,
        addReview,
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