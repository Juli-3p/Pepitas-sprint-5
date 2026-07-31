import React from 'react';
import './MainArea.css';

// Componente Header
const Header = () => {
  return (
    <header className="header">
      <h2>Panel de Administración</h2>
    </header>
  );
};

// Componente Content
const Content = ({ children }) => {
  return (
    <main className="content">
      {/* Aquí se renderizarán los módulos de productos, categorías y ventas */
      <h3>Bienvenido al Panel de Administración</h3>}
      <h4>Ejemplo de Contenido</h4>
      
      
      {children}
    </main>
  );
};

// Componente MainArea (Contenedor Principal)
const MainArea = ({ children }) => {
  return (
    <div className="main-area">
      <Header />
      <Content>
        {children}
      </Content>
    </div>
  );
};

export default MainArea;