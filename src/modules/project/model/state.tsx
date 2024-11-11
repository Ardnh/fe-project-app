import { Project, Pagination, ProjectItem } from ".";

export interface ProjectData {
  data: Project[];
  isLoading: boolean;
  pagination: Pagination;
}

export interface ProjectQueryParams {
  categoryName: string;
  projectName: string;
  sortBy: string;
  sortDirection: string;
}

export interface ProjectItemData {
  data: ProjectItem[];
  isLoading: boolean;
  pagination: Pagination;
}

export interface ProjectItemQueryParams {
  projectItemName: string;
  sortBy: string;
  sortDirection: "asc" | "desc";
}
