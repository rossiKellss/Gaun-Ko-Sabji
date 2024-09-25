import {createSlice} from '@reduxjs/toolkit';

const userCredentials={
    user:null,
    token:null
}

export const authSlice=createSlice({
    name:"auth",
    initialState:userCredentials,
    reducers:{
        setCredentials:(state,action)=>{
            const {user,accessToken}=action.payload;
            state.user=user
            state.token=accessToken
        },
        logout:(state,action)=>{
            state.user=null,
            state.action=null
        }
    }
})

export const {setCredentials,logout}=authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser=(state)=>state.user
export const selectCurrentToken=(state)=>state.token