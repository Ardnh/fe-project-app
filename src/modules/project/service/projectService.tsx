import { AxiosResponse } from "axios";
import { api } from "../../../app/middleware/api";
import { APIResponse, APIResponseWithData } from "../../../app/models";
import {
  UpdateProjectItemRequest,
  CreateProjectItemRequest,
  CreateProjectRequest,
  ProjectItemResponse,
  ProjectResponse,
  UpdateProjectRequest,
} from "../model";
import { ProjectQueryParams } from "../model/state";

export const getProject = async (
  params: ProjectQueryParams,
): Promise<AxiosResponse<APIResponseWithData<ProjectResponse>> | undefined> => {
  return await api.get("/projects", {
    params,
  });
};

export const createProjectAPI = async (
  data: CreateProjectRequest,
): Promise<AxiosResponse<APIResponse> | undefined> => {
  return await api.post("projects", data);
};

export const updateProject = async (
  id: string,
  data: UpdateProjectRequest,
): Promise<AxiosResponse<APIResponse> | undefined> => {
  return await api.put(`/projects/${id}`, data);
};

export const deleteProject = async (
  id: string,
): Promise<AxiosResponse<APIResponse> | undefined> => {
  return await api.delete(`/projects/${id}`);
};

export const getProjectItemByProjectId = async (
  id: string,
): Promise<
  AxiosResponse<APIResponseWithData<ProjectItemResponse>> | undefined
> => {
  return await api.get(`/project-item/${id}`);
};

export const createProjectItem = async (
  data: CreateProjectItemRequest,
): Promise<AxiosResponse<APIResponse> | undefined> => {
  return await api.post("/project-item", data);
};

export const updateProjectItem = async (
  id: string,
  data: UpdateProjectItemRequest,
): Promise<AxiosResponse<APIResponse> | undefined> => {
  return await api.put(`/project-item/${id}`, data);
};

export const deleteProjectItem = async (
  id: string,
): Promise<AxiosResponse<APIResponse> | undefined> => {
  return await api.put(`/project-item/${id}`);
};
