import { useAuthStore } from "../../store";

export const Home = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome {user?.name}</h1>
      <p className="text-sm text-gray-500">Your email is {user?.email}</p>
      <p className="text-sm text-gray-500">Your ID is {user?.id}</p>
    </div>
  );
};
