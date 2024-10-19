import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data : []
}

const productSlice = createSlice({
    name : "product slice",
    initialState,
    reducers:{
        getAllProducts: (state, actions) => {

             state.data = actions.payload;
        }
    }
});

export const {getAllProducts} = productSlice.actions;

export default productSlice.reducer;