import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';//created reducer


//state | reducer store
export const store = configureStore({

  reducer: {
    user: userReducer,
  },

});
