import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../service/authService";
import { LoginRequest, LoginResponse, RegisterRequest } from "../model";
import { AuthState } from "./authSlice";
import { isAxiosError } from "axios";
import { APIResponse } from "../../../app/models";

export const login = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>("auth/login", async (req: LoginRequest, thunkAPI) => {
  try {
    const result = await loginApi(req);
    if (result.data.code === 200 && result.data.data) {
      return result.data.data;
    } else {
      return thunkAPI.rejectWithValue(result.data.message || "Login failed");
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || "Login failed");
    }

    return thunkAPI.rejectWithValue("An unexpected error occurred");
  }
});

export const register = createAsyncThunk<
  APIResponse,
  RegisterRequest,
  { rejectValue: string }
>("auth/register", async (req: RegisterRequest, thunkAPI) => {
  try {
    const result = await registerApi(req);
    if (result && result.status === 200) {
      return result.data;
    } else {
      return thunkAPI.rejectWithValue(result.data.message || "Register failed");
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Register failed",
      );
    }

    return thunkAPI.rejectWithValue("An unexpected error occurred");
  }
});

const authExtraReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    .addCase(login.pending, (state) => {
      state.isAuthLoading = true;
    })
    .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      //Action akan menerima data dari hasil request api
      localStorage.setItem("token", action.payload.token);
      state.isAuthLoading = false;
    })
    .addCase(login.rejected, (state) => {
      state.isAuthLoading = false;
    });

  builder
    .addCase(register.pending, (state) => {
      state.isAuthLoading = true;
    })
    .addCase(register.fulfilled, (state) => {
      state.isAuthLoading = false;
    })
    .addCase(register.rejected, (state) => {
      state.isAuthLoading = false;
    });
};

export default authExtraReducers;
