import { api } from "./axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}

export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>("/login", payload);
  return res.data;
};
