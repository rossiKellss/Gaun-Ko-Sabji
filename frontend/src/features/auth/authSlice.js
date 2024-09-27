import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const userCredentials={
    user:null,
    token:null
}

export const authSlice=createSlice({
    name:"auth",
    initialState:userCredentials,
    reducers:{
        setCredentials:(state,action)=>{
            
            const {user,token}=action.payload;
            state.user=user
            state.token=token
        },
        logout:(state,action)=>{
            state.user=null,
            state.action=null
        }
    }
})

export const {setCredentials,logout}=authSlice.actions;
export default authSlice.reducer;

// export const selectCurrentUser=useSelector((state)=>state)

// export const selectCurrentToken=((state)=>state.auth.token)