import { Link } from "react-router";

export const Logo = () => {
  return (
    <div className="flex-1">
      <Link to="/">
        <p className="btn btn-ghost text-xl">Tinder Web Dev</p>
      </Link>
    </div>
  );
};
