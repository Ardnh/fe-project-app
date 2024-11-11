import { createSlice } from "@reduxjs/toolkit";
import projectExtraReducers from "./projectExtraReducers";
import projectReducers from "./projectReducers";
import {
  ProjectData,
  ProjectItemData,
  ProjectItemQueryParams,
  ProjectQueryParams,
} from "../model/state";

export interface ProjectState {
  projectData: ProjectData;
  projectItemData: ProjectItemData;
  projectQueryParams: ProjectQueryParams;
  projectItemQueryParams: ProjectItemQueryParams;
}

const initialState: ProjectState = {
  projectData: {
    data: [],
    isLoading: false,
    pagination: {
      currentPage: 1,
      itemsPerPage: 50,
      totalItems: 0,
      totalPages: 0,
    },
  },
  projectItemData: {
    data: [],
    isLoading: false,
    pagination: {
      currentPage: 1,
      itemsPerPage: 50,
      totalItems: 0,
      totalPages: 0,
    },
  },
  projectQueryParams: {
    categoryName: "",
    projectName: "",
    sortBy: "",
    sortDirection: "asc",
  },
  projectItemQueryParams: {
    projectItemName: "",
    sortBy: "",
    sortDirection: "asc",
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: projectReducers,
  extraReducers: (builder) => projectExtraReducers(builder),
});

export const { setProjectQueryParams } = projectSlice.actions;
export default projectSlice.reducer;
