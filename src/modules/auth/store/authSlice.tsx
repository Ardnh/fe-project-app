import { createSlice } from "@reduxjs/toolkit";
import authExtraReducers from "./authExtraReducers";
import authReducers from "./authReducers";

export interface AuthState {
     isAuthLoading: boolean
}

const initialState: AuthState = {
     isAuthLoading: false,
}

export const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: authReducers,
     extraReducers: (builder) => authExtraReducers(builder)
})

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;