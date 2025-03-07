
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Seo 
        title="Página no encontrada | Floral Designer"
        description="Lo sentimos, la página que buscas no existe."
        type="website"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Página no encontrada</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Regresar al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
