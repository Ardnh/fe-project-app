import { PayloadAction } from "@reduxjs/toolkit";
import { ProjectState } from "./projectSlice";
import { ProjectQueryParams } from "../model/state";

const projectReducers = {
  setProjectQueryParams: (
    state: ProjectState,
    action: PayloadAction<ProjectQueryParams>,
  ) => {},
};

export default projectReducers;
