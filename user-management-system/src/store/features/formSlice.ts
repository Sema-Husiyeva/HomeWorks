import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFormData {
    name: string;
    age: number | null;
    address: string;
    key?: number;
}

interface IFormState {
    dataSource: IFormData[];
}
  
  const initialState: IFormState = {
    dataSource: [],
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitForm: (state, action: PayloadAction<IFormData>) => {
            state.dataSource.push(action.payload);
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.dataSource = state.dataSource.filter(user => user.key !== action.payload);
        },
        editUser: (state, action: PayloadAction<IFormData>) => {
            const index = state.dataSource.findIndex(user => user.key === action.payload.key);
            if (index !== -1) {
              state.dataSource[index] = action.payload;
            }
        },
    },
  })
  
  export const { submitForm, deleteUser, editUser } = formSlice.actions
  
  export default formSlice.reducer