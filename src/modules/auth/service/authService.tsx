import { AxiosResponse } from "axios";
import { api as appApi } from "../../../app/middleware/api";
import { APIResponse, APIResponseWithData } from "../../../app/models";
import { LoginRequest, LoginResponse, RegisterRequest } from "../model";

export const loginApi = async (req: LoginRequest): Promise<AxiosResponse<APIResponseWithData<LoginResponse>>> => {
     return appApi.post("user/login", req);
}

export const registerApi = async (req: RegisterRequest): Promise<AxiosResponse<APIResponse>> => {
     return appApi.post("user/register", req);
}
