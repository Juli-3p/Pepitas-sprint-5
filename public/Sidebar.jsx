import React, { useState } from 'react';
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
          <h2>PepitasCorporation</h2>
        </div>

        {/* Zona central: Enlaces de navegación */}
        <ul className="sidebar-links">
          <li>
            <a href="#" onClick={(event) => {
              event.preventDefault();
              closeMenu();
            }}>
              🏠 Inicio
            </a>
          </li>
          <li>
            <a href="products" onClick={(event) => {
              event.preventDefault();
              closeMenu();
            }}>
              📦 Productos
            </a>
          </li>
          <li>
            <a href="categories" onClick={(event) => {
              event.preventDefault();
              closeMenu();
            }}>
              🏪 Categorías
            </a>
          </li>
        </ul>

        {/* Zona inferior: Perfil de Usuario */}
        <div className="sidebar-footer">
          <a href="#" className="profile-btn" onClick={(event) => {
            event.preventDefault();
            closeMenu();
          }}>
            <span className="profile-icon">👤</span>
            NPC
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;