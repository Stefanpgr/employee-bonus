import { rootReducer , } from "./reducer";
import { createStore, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    blacklist: ['reports'],
	storage
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer , composeEnhancers());

export const persistor = persistStore(store);