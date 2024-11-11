// Interface untuk Project
export interface Project {
  id: string;
  category_id: string;
  user_id: string;
  name: string;
  description: string;
  budget: number;
  created_at: string; // Bisa diubah menjadi Date jika diperlukan
  updated_at: string; // Bisa diubah menjadi Date jika diperlukan
  category: Category;
}

// Interface untuk Category
interface Category {
  id: string;
  name: string;
  created_at: string; // Bisa diubah menjadi Date jika diperlukan
  updated_at: string; // Bisa diubah menjadi Date jika diperlukan
}

// Pagination
export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface ProjectFilters {
  categoryName: string;
  projectName: string;
  sortBy: string;
  sortDirection: "asc" | "desc"; // Menggunakan tipe literal untuk membatasi nilai
}

export interface ProjectResponse {
  items: Project[];
  filters: ProjectFilters;
  pagination: Pagination;
}

// createProjectRequest.ts
export interface CreateProjectRequest {
  category_id: string;
  user_id: string;
  name: string;
  description: string;
  budget: number;
}

// updateProjectRequest.ts
export interface UpdateProjectRequest {
  category_id: string;
  user_id: string;
  name: string;
  description: string;
  budget: number;
}

// Project Item
export interface ProjectItem {
  id: string;
  project_id: string;
  name: string;
  budget_item: number;
  status: boolean;
}

export interface ProjectItemResponse {
  filters: {
    projectItemName: string;
    sortBy: string;
    sortDirection: "asc" | "desc";
  };
  project_items: ProjectItem[];
  project: Project;
  pagination: Pagination;
}

export interface CreateProjectItemRequest {
  project_id: string;
  name: string;
  budget_item: number;
  status: boolean;
}

export interface UpdateProjectItemRequest {
  project_id: string;
  name: string;
  budget_item: number;
  status: boolean;
}
