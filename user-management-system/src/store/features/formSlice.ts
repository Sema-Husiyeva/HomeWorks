import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormData {
    name: string;
    age: number;
    address: string;
    key: number;
}

interface FormState {
    dataSource: FormData[];
}
  
  const initialState: FormState = {
    dataSource: [],
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitForm: (state, action: PayloadAction<FormData>) => {
            state.dataSource.push(action.payload);
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.dataSource = state.dataSource.filter(user => user.key !== action.payload);
        },
        editUser: (state, action: PayloadAction<FormData>) => {
            const index = state.dataSource.findIndex(user => user.key === action.payload.key);
            if (index !== -1) {
              state.dataSource[index] = action.payload;
            }
        },
    },
  })
  
  export const { submitForm, deleteUser, editUser } = formSlice.actions
  
  export default formSlice.reducer