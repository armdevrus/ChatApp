import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createLogger} from 'redux-logger'

import dataUserReducer from "../features/dataUser/dataUserSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers(
    {
        dataUser: dataUserReducer
    }
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
    level: 'warn',
    duration: true
})

const store = configureStore({
    reducer: persistedReducer,
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger)
})

const persistor = persistStore(store)

export {persistor, store}
