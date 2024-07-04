import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slice/userDataSlice";
import loadingReducer from "./slice/loadingSlice";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
