import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';//created reducer


//state | reducer store
export const stateStore = configureStore({

  reducer: {
    user: userReducer,
  },

});
