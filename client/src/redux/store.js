import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Import the reducer, not useReducer

export const store = configureStore({
  reducer: { user: userReducer }, // Use the reducer here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
