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
  subscriptionPlan: {
    amount: string;
    planType: string;
  } | null;
};

const initialState: AuthState = {
  user: null,
  isSignedUp: false,
  loginSuccess: false,
  subscriptionPlan: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isSignedUp = true;
    },
    login: (state, action: PayloadAction<IUser>) => {
      if (
        state.user &&
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        state.loginSuccess = true;
      } 
    },
    setSubscriptionPlan: (state, action: PayloadAction<{ amount: string; planType: string }>) => {
     state.subscriptionPlan = action.payload;
    },
  },
});

export const { signup, login, setSubscriptionPlan } = authSlice.actions;
export default authSlice.reducer;