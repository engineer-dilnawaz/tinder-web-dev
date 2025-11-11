import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
  login: (user: { id: string; email: string; name: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: (user) => {
        set({ isLoggedIn: true, user });
      },
      logout: () => {
        set({ isLoggedIn: false, user: null });
      },
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);
