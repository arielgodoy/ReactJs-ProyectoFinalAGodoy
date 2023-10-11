import React from 'react';
import { redirect } from 'react-router-dom';

const config = {
  routes: {
    public: ["/login", "/register", "/about", "/"],
    private: ["/profile", "/dashboard", "/settings", "/contact"],
  },
};

const withAuth = (Component) => {
  // Verificar si el usuario está autenticado (puedes implementar tu lógica de autenticación aquí)
  const isAuthenticated = true; // Cambia esto con tu lógica de autenticación

  return (props) => {
    // Obtener la ruta actual
    const currentPath = window.location.pathname;

    // Verificar si la ruta actual está en las rutas públicas
    const isPublicRoute = config.routes.public.includes(currentPath);

    if (isPublicRoute && isAuthenticated) {
      // Si estamos en una ruta pública y el usuario está autenticado, redirige a la página de dashboard
      return <redirect to="/home" />;
    } else if (!isPublicRoute && !isAuthenticated) {
      // Si estamos en una ruta privada y el usuario no está autenticado, redirige a la página de login
      return <redirect to="/login" />;
    } else {
      // Si no se cumple ninguna de las condiciones anteriores, renderiza el componente original
      return <Component {...props} />;
    }
  };
};

export default withAuth;
