import { configureStore } from '@reduxjs/toolkit'
import  fruitReducer  from './features/fruitSlice'

export const store = configureStore({
  reducer: {
    fruits: fruitReducer,
  },
})