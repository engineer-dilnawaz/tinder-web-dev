import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { useLogin } from "../../hooks/useLogin";
import { loginSchema, type LoginSchema } from "../../schemas";
import { useAuthStore } from "../../store";

export const useLoginLogic = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { handleSubmit, control } = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const {
    mutate: loginMutation,
    isPending: isLoginPending,
    error: loginError,
  } = useLogin({
    onSuccess: (data) => {
      if (data.success) {
        login({
          id: data.user.id.toString(),
          email: data.user.email,
          name: data.user.name,
        });
        navigate("/");
      }
    },
  });

  const handleLogin = (data: LoginSchema) => {
    loginMutation({ email: data.email, password: data.password });
  };

  return {
    isLoginPending,
    handleLogin,
    handleSubmit,
    loginError,
    control,
  };
};
