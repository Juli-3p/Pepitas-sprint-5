import { useState } from "react";
import "./App.css";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="logo">
          <h2>LOGO</h2>
        </div>

        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
        </nav>

        <div className="user">
          <span>User</span>
        </div>

      </aside>

      <main className="main">

        <button
          className="menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <div className="content">
          <h1>Main Area</h1>
          <p>
            The current page will be rendered here once routing is implemented.
          </p>
        </div>

      </main>

    </div>
  );
}

export default App;
