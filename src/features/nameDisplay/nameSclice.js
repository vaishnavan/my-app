import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userName:'sakthi',
    
}

export const nameSclice = createSlice({
    name:'storeName',
    initialState,
    reducers:{
        showName:(state)=>{
            state.userName = 'vaishnavan'
        }
    }
})

export const { showName } = nameSclice.actions;

export const sendName = (state) => state.storeName.userName

export default nameSclice.reducer