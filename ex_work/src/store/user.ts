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
}

const initialState:Reduxtype = {
   token: '',
   user: {},
   pending: false,
   rejected: false,
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
         state.user = action.payload.user;
         state.token = action.payload.accessToken;
         state.pending = false;
      },
      [login.pending]: (state, action:PayloadAction<loginSuccessResponse>) => {
         state.user = action,
         state.pending = true
      },
      [login.rejected]: (state, action:PayloadAction<loginSuccessResponse>) => {
         state.user = ''
         state.rejected = true
      }
   },
   reducers: undefined
})
export const authActions = authSlice.actions