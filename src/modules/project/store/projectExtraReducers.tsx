import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectState } from "./projectSlice";
import { getProject, createProjectAPI } from "../service/projectService";
import { ProjectQueryParams } from "../model/state";
import { CreateProjectRequest } from "../model";
import { isAxiosError } from "axios";

export const getAllProject = createAsyncThunk(
  "project/getAllProject",
  async (params: ProjectQueryParams) => {
    try {
      return await getProject(params);
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
);

export const createProject = createAsyncThunk(
  "project/create",
  async (req: CreateProjectRequest, { dispatch, rejectWithValue }) => {
    try {
      const result = await createProjectAPI(req);
      return result?.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data || "Login failed");
      }
      return rejectWithValue("An unexpected error occurred");
    } finally {
      const params = {
        categoryName: "",
        projectName: "",
        sortBy: "",
        sortDirection: "asc",
      };
      dispatch(getAllProject(params));
    }
  },
);

const projectExtraReducers = (
  builder: ActionReducerMapBuilder<ProjectState>,
) => {
  // Get all project builder
  builder
    .addCase(getAllProject.pending, (state) => {
      state.projectData.isLoading = true;
    })
    .addCase(getAllProject.fulfilled, (state, action) => {
      if (action.payload?.data) {
        state.projectData.data = action.payload.data.data.items;
        state.projectData.pagination = action.payload.data.data.pagination;
      } else {
        state.projectData.data = [];
      }
      state.projectData.isLoading = false;
    })
    .addCase(getAllProject.rejected, (state) => {
      state.projectData.isLoading = false;
      state.projectData.data = [];
    });

  // Create Project
  builder
    .addCase(createProject.fulfilled, (state, action) => {
      if (action.payload?.code === 200) {
        getAllProject(state.projectQueryParams);
      }
    })
    .addCase(createProject.rejected, (state) => {
      getAllProject(state.projectQueryParams);
    });
};

export default projectExtraReducers;
