import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';
import MainArea from '../../../components/MainArea/MainArea.jsx';
import './ProductList.css';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Cargar productos desde la API REST
  useEffect(() => {
    fetch('http://localhost:3000/products') // Reemplaza por la URL de tu API
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error consultando la API:', error);
        setLoading(false);
      });
  }, []);

  // Filtrado de productos según el texto ingresado (US8)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="mainarea-container">
        {/* Header estático de la vista con buscador y botón */}
        <header className="products-header">
          <h2>Productos</h2>
          <div className="header-actions">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button
              className="btn-add-product"
              onClick={() => navigate('/products/new')}
            >
              Agregar Producto
            </button>
          </div>
        </header>

        {/* 1. Estado de Carga */}
        {loading ? (
          <div className="state-message">
            <p>Cargando...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          /* 2. Sin resultados de búsqueda (US8) */
          <div className="state-message">
            <p>No se encontraron elementos coincidentes.</p>
          </div>
        ) : (
          /* 3. Lista de productos */
          <div className="products-list">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card-link"
              >
                <div className="product-item">
                  <div className="product-thumb">
                    <img
                      src={product.image || 'https://via.placeholder.com/50'}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-details">
                    <span className="product-title">{product.name}</span>
                    <span className="product-code">#{product.id}</span>
                  </div>
                  <div className="product-arrow">›</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}