import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["followedUsers"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
  },
  middleware,
  devTools: true,
});

export const persistor = persistStore(store);
