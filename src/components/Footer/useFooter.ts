import { useMemo } from "react";

export const useFooter = () => {
  const year = new Date().getFullYear();

  const fullYear = useMemo(() => year, [year]);

  return { fullYear };
};
