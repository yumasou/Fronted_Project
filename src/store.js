import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./Components/counter/ProductSlice";
import pageReducer from "./Components/counter/PageSlice"
import itemReducer from "./Components/counter/ItemSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "page",
  storage,
  whitelist: ["current_page"], // Add slices you want to persist
};

const persistedPageReducer = persistReducer(persistConfig, pageReducer);

const store = configureStore({
  reducer: {
    products: serviceReducer,
    pages:persistedPageReducer,
    items:itemReducer
  },
  // Add middleware, enhancers, etc. here if needed
});

export const persistor = persistStore(store);

export default store;
