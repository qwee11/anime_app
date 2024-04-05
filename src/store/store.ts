import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { animeAPI } from "../services/animeService";
import { mangaAPI } from "../services/mangaService";

const rootReducer = combineReducers({
    [animeAPI.reducerPath]: animeAPI.reducer,
    [mangaAPI.reducerPath]: mangaAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([animeAPI.middleware, mangaAPI.middleware])
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];