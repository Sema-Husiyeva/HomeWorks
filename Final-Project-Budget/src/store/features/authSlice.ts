import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
};

interface AuthState {
  user: IUser | null;
  isSignedUp: boolean;
  loginSuccess: boolean;
};

const initialState: AuthState = {
  user: null,
  isSignedUp: false,
  loginSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    login: (state, action: PayloadAction<IUser>) => {
      if (
        state.user &&
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        state.isSignedUp = true;
        state.loginSuccess = true;
      } else {
        alert('Email və ya şifrə yalnışdır!');
      }
    },
  },
});

export const { signup, login } = authSlice.actions;
export default authSlice.reducer;