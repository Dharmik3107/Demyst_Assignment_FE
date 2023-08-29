import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const decisionSlice = createSlice({
    name:"decision",
    initialState: false,
    reducers:{
        setDecision:(state,action:PayloadAction<boolean>)=>{
            if(action.payload) state = action.payload
            else return state
            return state
        }
    }
})

export const {setDecision} = decisionSlice.actions;
export default decisionSlice.reducer