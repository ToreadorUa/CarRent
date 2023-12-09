import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carReducer } from './slice';

// auth persist config
const PersistConfig = {
  key: 'store',
  storage: storage,
  whitelist: ['id'],
};

const rootReduser = {
    store: persistReducer(PersistConfig, carReducer),
}
  // redusers
  
 
  


export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
