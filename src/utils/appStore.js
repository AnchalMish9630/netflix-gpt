import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSliceReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        user : userReducer,
        movies: movieReducer,
        gptSlice: gptSliceReducer, 
        config: configReducer,
    }
});

export default appStore;