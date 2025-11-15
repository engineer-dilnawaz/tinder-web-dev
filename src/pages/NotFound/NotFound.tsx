import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg"
            alt="404 Page Not Found"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Oops! Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};
