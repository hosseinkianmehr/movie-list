import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
interface ServerResponse<T> {
   accessToken: string,
   user: object
   status: string
   message: string
   data: T
}

interface loginSuccessData {
   accessToken: string,
   user: object
}

type loginSuccessResponse = ServerResponse<loginSuccessData>


interface Reduxtype{
   token: object,
   user: object,
   pending: boolean,
   rejected: boolean,
   success: boolean,
   islogin: boolean
}

const initialState:Reduxtype = {
   token: {},
   user: {},
   pending: false,
   rejected: false,
   success: false,
   islogin: false
}

export const login = createAsyncThunk("auth/login", async (data:object) => {
   const response = await axios.post('http://localhost:3002/login/', data)
   console.log(response.data, 'actionssss')
   return response.data
})

export const authSlice = createSlice({
   name: "auth",
   initialState,
   extraReducers: (builder)=>{
      builder.addCase(login.fulfilled,(state, action:PayloadAction<loginSuccessResponse>) => {
            console.log(action.payload,'action.payload')
            localStorage.setItem("token", action.payload.accessToken);
            state.user = action.payload.user;
            state.pending = false;
            state.success= true;
            state.islogin = true;
         }),
         builder.addCase(login.pending,(state) => {
            state.pending = true
         }),
         builder.addCase(login.rejected,(state) => {
            state.rejected = true
         })
   }
      // [login.fulfilled]: (state:Reduxtype, action:PayloadAction<loginSuccessResponse>) => {
      //    localStorage.setItem("token", action.payload.accessToken);
      //    state.user = action.payload.user;
      //    state.pending = false;
      //    state.success= true;
      //    state.islogin = true;
      // },
      // [login.pending]: (state ) => {
      //    state.pending = true
      // },
      // [login.rejected]: (state) => {
      //    state.rejected = true
      // }
   ,
   reducers:{
      logout: (state)=>{
         localStorage.removeItem("token");
         state.success= false;
         state.islogin = false;
      },
      login:(state,action)=>{
         state.islogin = true;
         state.token = action.payload;
      }
   } 
})
export const authActions = authSlice.actions