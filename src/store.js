import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import modeReducer from "./Components/counter/modeSlice"
import ActiveSectionReducer from "./Components/counter/ActiveSectionSlice";
import storage from "redux-persist/lib/storage";

const persistConfig1 = {
  key: "mode",
  storage,
  whitelist: ["data"], // Add slices you want to persist
};
const persistedModeReducer=persistReducer(persistConfig1,modeReducer)
const store = configureStore({
  reducer: {
    mode:persistedModeReducer,
    active_section:ActiveSectionReducer,
  },
});

export const persistor = persistStore(store);

export default store;
