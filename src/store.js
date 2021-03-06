import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./features/user.js";

const store = configureStore
  ({
    reducer:
    {
      user: userReducer,
    },
   
  });

setupListeners(store.dispatch);

export default store;