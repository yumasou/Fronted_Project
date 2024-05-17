import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./Components/counter/ProductSlice";
import pageReducer from "./Components/counter/PageSlice";
import itemReducer from "./Components/counter/ItemSlice";
import sameCatReducer from "./Components/counter/SameCatSlice";
import catTypeReducer from "./Components/counter/CatTypeSlice"
import testReducer from "./Components/counter/TestSlice"
import { persistReducer, persistStore } from "redux-persist";
import modeReducer from "./Components/counter/modeSlice"
import ActiveSectionReducer from "./Components/counter/ActiveSectionSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "page",
  storage,
  whitelist: ["current_page"], // Add slices you want to persist
};
const persistConfig1 = {
  key: "mode",
  storage,
  whitelist: ["data"], // Add slices you want to persist
};
const persistedPageReducer = persistReducer(persistConfig, pageReducer);
const persistedModeReducer=persistReducer(persistConfig1,modeReducer)
const store = configureStore({
  reducer: {
    mode:persistedModeReducer,
    active_section:ActiveSectionReducer,
    products: serviceReducer,
    pages: persistedPageReducer,
    items: itemReducer,
    catType:catTypeReducer,
    sameCat:sameCatReducer,
    test:testReducer
    
  },
  // Add middleware, enhancers, etc. here if needed
});

export const persistor = persistStore(store);

export default store;
