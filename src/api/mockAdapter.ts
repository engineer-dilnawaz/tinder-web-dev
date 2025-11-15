import {
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { generateUserNameFromEmail, idGenerator } from "../utils";

export const mockAdapter = async <T = unknown>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  if (config.url === "/login" && config.method === "post") {
    const requestData =
      typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    const data = {
      success: true,
      token: "jwt-token-123",
      user: {
        id: idGenerator(),
        name: generateUserNameFromEmail(requestData.email),
        email: requestData.email,
      },
    };

    return {
      data: data as T,
      status: 200,
      statusText: "OK",
      headers: {} as AxiosRequestHeaders,
      config: config as InternalAxiosRequestConfig,
      request: {},
    };
  }

  return {
    data: { error: "Not Found" } as T,
    status: 404,
    statusText: "Not Found",
    headers: {} as AxiosRequestHeaders,
    config: config as InternalAxiosRequestConfig,
    request: {},
  };
};
