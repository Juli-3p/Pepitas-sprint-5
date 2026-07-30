import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  // Estado para controlar si el menú está abierto en pantallas chicas (<= 1024px)
  const [isOpen, setIsOpen] = useState(false);

  // Funciones para abrir y cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Botón ☰ que solo será visible en pantallas de 1024px o menos */}
      <button className="menu-btn-mobile" onClick={toggleMenu}>
        ☰ Productos {/* O el nombre de la sección actual */}
      </button>

      {/* 
        Fondo oscuro transparente (Overlay): 
        Si el menú está abierto en móvil, mostramos esto. 
        Al hacer click aquí afuera del menú, se cierra.
      */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Contenedor principal del Menú. Si isOpen es true, le agregamos la clase 'open' */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        
        {/* Zona superior: Logo o Título */}
        <div className="sidebar-header">
          <h2>Santander</h2>
        </div>

        {/* Zona central: Enlaces de navegación */}
        <ul className="sidebar-links">
          <li>
            {/* NavLink añade automáticamente la clase 'active' si la ruta coincide */}
            <NavLink to="/home" onClick={closeMenu}>
              🏠 Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={closeMenu}>
              📦 Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" onClick={closeMenu}>
              🏪 Categorías
            </NavLink>
          </li>
        </ul>

        {/* Zona inferior: Perfil de Usuario */}
        <div className="sidebar-footer">
          <NavLink to="/profile" className="profile-btn" onClick={closeMenu}>
            <span className="profile-icon">👤</span>
            Olivia
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;