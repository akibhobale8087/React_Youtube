import {createSlice} from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name:"searchSlice",
    initialState:{},
    reducers:{
        chacheResults:(state,action)=>{
            state = Object.assign(state,action.payload);
            //state = {...action.payload,...state};
        }
    }
})

export const {chacheResults} = searchSlice.actions;
export default searchSlice.reducer;