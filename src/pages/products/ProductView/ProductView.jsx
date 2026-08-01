import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductView.css";

export default function ProductView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [originalProduct, setOriginalProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setOriginalProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando producto:", error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value
    });
  };

  const changeStock = (amount) => {
    setProduct({
      ...product,
      stock: Number(product.stock) + amount
    });
  };

  const removeImage = () => {
    setProduct({
      ...product,
      image: ""
    });
  };

  const cancelChanges = () => {
    setProduct(originalProduct);
  };

  const saveChanges = () => {

    const updatedProduct = {
      ...product,
      price: Number(product.price),
      stock: Number(product.stock)
    };

    if (!updatedProduct.name.trim()) {
      alert("El nombre es obligatorio");
      return;
    }

    fetch(`http://localhost:3000/api/products/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setOriginalProduct(data);
        alert("Producto guardado");
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const deleteProduct = () => {

    fetch(`http://localhost:3000/api/products/${id}/delete`, {
      method: "DELETE"
    })
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        console.error(error);
      });

  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="product-view">

      <header className="product-header">
        <h2>
          Productos &gt; #{product.id}
        </h2>

        <button
          className="delete-button"
          onClick={deleteProduct}
        >
          Eliminar
        </button>
      </header>

      <section className="product-content">

        <div className="product-summary">

          {product.image && (
            <img
              src={`http://localhost:3000${product.image}`}
              alt={product.name}
            />
          )}

          <h2>{product.name}</h2>

          <p>ID: #{product.id}</p>
          <p>Stock: {product.stock}</p>
          <p>Precio: ${product.price}</p>
          <p>Categoría: {product.category}</p>

        </div>

        <form className="product-form">

          <label>
            Nombre:
            <input
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Descripción:
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Precio:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </label>

          <label>
            Stock:
            <div className="stock-controls">

              <button
                type="button"
                onClick={() => changeStock(-1)}
              >
                ➖
              </button>

              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => changeStock(1)}
              >
                ➕
              </button>

            </div>
          </label>

          <label>
            Imagen URL:
            <input
              name="image"
              value={product.image}
              onChange={handleChange}
            />
          </label>

          <button
            type="button"
            onClick={removeImage}
          >
            Eliminar imagen
          </button>

          <div className="form-buttons">

            <button
              type="button"
              onClick={cancelChanges}
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={saveChanges}
            >
              Guardar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
