import { createSlice } from '@reduxjs/toolkit'

const fruitesInitialState = 
     [
        {
            id:1,
            name: 'Alma',
        },
        {
            id:2,
            name: 'Banan',
        },
        {
            id:3,
            name: 'Portağal',
        },
        {
            id:4,
            name: 'Armud',
        },
        {
            id:5,
            name: 'Ananas',
        },
        {
            id:6,
            name: 'Kivi',
        },
        {
            id:7,
            name: 'Üzüm',
        }
    ];


  export const fruitSlice = createSlice({
    name:"fruits",
    initialState:{
        fruits:fruitesInitialState,
        selectedFruits: [],
    },
    reducers: {
        toggleFruits:(state,action)=>{
            const fruitId = action.payload;
            if (state.selectedFruits.includes(fruitId)){
               state.selectedFruits = state.selectedFruits.filter((id) => id !== fruitId);
            } else {
                state.selectedFruits.push(fruitId);
            }
        },

        selectAll: (state)=>{
            state.selectedFruits = state.fruits.map((fruit)=>fruit.id);
        },

        deleteAll: (state)=>{
            state.selectedFruits = [];
        }
    }
  })


export const {toggleFruits, selectAll, deleteAll} = fruitSlice.actions

export default fruitSlice.reducer