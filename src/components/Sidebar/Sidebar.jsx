import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../../public/logo.png';

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
        ☰
      </button>

      {/* 
        Fondo oscuro transparente (Overlay): 
        Al hacer click aquí afuera del menú, se cierra.
      */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Contenedor principal del Menú */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        
        {/* Zona superior: Logo o Título */}
        <div className="sidebar-header">
          <img src={Logo} alt="Logo" className="sidebar-logo" />
        </div>

{/* Zona central: Enlaces de navegación */}
        <ul className="sidebar-links">
          <li>
            <NavLink 
              to="/home" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              🏠 Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              📦 Productos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/categories" 
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              🏪 Categorías
            </NavLink>
          </li>
        </ul>

        {/* Zona inferior: Perfil de Usuario */}
        <div className="sidebar-footer">
          <NavLink 
            to="/profile" 
            onClick={closeMenu}
            className={({ isActive }) => `profile-btn ${isActive ? 'active' : ''}`}
          >
            <span className="profile-icon">👤</span>
            Usuario
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;