
import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({

  name: 'user',
  initialState: {
      user: null
  },

  reducers: {
    login: (state, action) => {
  
      state.value = action.payload;
    },
  
    logout: (state) => {
      state.user = null;
    },
  },
 
});

export const { login, logout } = userSlice.actions;//state actions

export const selectUser = (state) => state.user.user;//allow us to pull the states

export default userSlice.reducer;//exporting the reducer
