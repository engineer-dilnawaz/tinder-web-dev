type LoadingProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "text-primary"
    | "text-secondary"
    | "text-accent"
    | "text-neutral"
    | "text-info"
    | "text-success"
    | "text-warning"
    | "text-error";
};

export const Loading = ({
  size = "md",
  color = "text-secondary",
}: LoadingProps) => {
  return (
    <span
      className={`loading loading-infinity loading-${size} ${color}`}
    ></span>
  );
};
