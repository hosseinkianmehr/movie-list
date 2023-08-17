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
   token: string,
   user: object,
   pending: boolean,
   rejected: boolean,
   Success: boolean
}

const initialState:Reduxtype = {
   token: '',
   user: {},
   pending: false,
   rejected: false,
   success: false
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
         state.token = action.payload.accessToken;
         state.pending = false;
         state.success= true;
      },
      [login.pending]: (state ) => {
         state.pending = true
      },
      [login.rejected]: (state) => {
         state.rejected = true
      }
   },
   reducers: undefined
})
export const authActions = authSlice.actions