import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { loginApi, type LoginRequest, type LoginResponse } from "../api/auth";

export const useLogin = (
  options?: UseMutationOptions<LoginResponse, Error, LoginRequest>
) => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: loginApi,
    ...options,
  });
};
