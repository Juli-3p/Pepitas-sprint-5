import React from 'react';
import './MainArea.css';
import SummaryCard from '../SummaryCard/SummaryCard.jsx';

// Componente Header
const Header = () => {
  return (
    <header className="header">
      <h2>Panel de Administración</h2>
    </header>
  );
};

// Componente Content
const Content = ({ username, productsCount, categoriesCount, children }) => {
  return (
    <main className="content">
      <div className="home"> 
        <h1>Hola {username}</h1>

        <div className="summary-conteiner">
          <SummaryCard
            title="Productos"
            count={productsCount}
            listRoute="/products"
            newRoute="/products/new"
            type="product"
          />
          <SummaryCard
            title="Categorías"
            count={categoriesCount}
            listRoute="/categories"
            newRoute="/categories/new"
            type="category"
          />
        </div>
      </div>

      {children}
    </main>
  );
};

// Componente MainArea (Contenedor Principal)
const MainArea = ({ username, productsCount, categoriesCount, children }) => {
  return (
    <div className="main-area">
      <Header />
      <Content 
        username={username} 
        productsCount={productsCount} 
        categoriesCount={categoriesCount}
      >
        {children}
      </Content>
    </div>
  );
};

export default MainArea;