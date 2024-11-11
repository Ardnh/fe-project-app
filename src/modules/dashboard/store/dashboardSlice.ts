import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  currentDate: Date;
}

const initialState: DashboardState = {
  currentDate: new Date(),
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchOverviewData: (state, action: PayloadAction<any>) => {
      console.log(state);
      console.log(action.payload);
    },
    
  },
});

// Perbaiki ekspor action
export const { fetchOverviewData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
