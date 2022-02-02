import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

const Wrapper = ({ children }) => {
    const {
        REDUX_STATE: initialState,
    } = window;

    return (
        <Provider store={configureStore(initialState)}>
            { children }
        </Provider>
    );
}

export default Wrapper;
