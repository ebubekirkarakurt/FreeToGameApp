import { configureStore } from "@reduxjs/toolkit";
import selectPlatform from "../reducer/selectPlatform";
import selectCategory from "../reducer/selectCategory";
import selectSortBy from "../reducer/selectSortBy";


export const store = configureStore({
    reducer: {
        selectPlatform: selectPlatform,
        selectCategory: selectCategory,
        selectSortBy: selectSortBy,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch