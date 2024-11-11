import { PayloadAction } from "@reduxjs/toolkit"
import { AuthState } from "./authSlice"

const authReducers = {
      setLoading: (state: AuthState, action: PayloadAction<boolean>) => {
            state.isAuthLoading = action.payload
      }
}

export default authReducers