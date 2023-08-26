import secureLocalStorage from "react-secure-storage"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { decodeToken } from "react-jwt"
import axios from "axios"
interface ServerResponse<T> {
   status: string
   message: string
   data: T
}

interface loginSuccessData {
   token: string,
   refreshToken: string
}

type loginSuccessResponse = ServerResponse<loginSuccessData>


interface Reduxtype{
   token: object,
   user: object,
   pending: boolean,
   rejected: boolean,
   success: boolean,
   islogin: false
}

const initialState:Reduxtype = {
   token: {},
   user: {},
   pending: false,
   rejected: false,
   success: false,
   islogin: false
}

export const login = createAsyncThunk("auth/login", async (data) => {
   const response = await axios.post('http://localhost:3002/login/', data)
   console.log(response.data, 'actionssss')
   return response.data
}, {
   serializeError: (err: any) => {
      return { message: err.response.data.message }
   }
})

export const authSlice = createSlice({
   name: "auth",
   initialState,
   extraReducers: {
      [login.fulfilled]: (state, action:PayloadAction<loginSuccessResponse>) => {
         localStorage.setItem("token", action.payload.accessToken);
         state.user = action.payload.user;
         state.pending = false;
         state.success= true;
         state.islogin = true;
      },
      [login.pending]: (state ) => {
         state.pending = true
      },
      [login.rejected]: (state) => {
         state.rejected = true
      }
   },
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