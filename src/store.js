import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState= {
    simpleReducer: {
        result: 'foobar',
    }
}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
};
