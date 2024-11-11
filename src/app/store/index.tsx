// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../modules/auth/store/authSlice";
import projectReducer from "../../modules/project/store/projectSlice";
import dashboardReducer from "../../modules/dashboard/store/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
