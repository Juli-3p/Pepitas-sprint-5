import "./MainArea.css";
import Sidebar from "../Sidebar/Sidebar";

// Header
const Header = ({ username = "Usuario" }) => {
  return (
    <header className="header">
      <h1>¡Hola <span>{username}</span>!</h1>
    </header>
  );
};

// MainArea
const MainArea = ({ username, children }) => {
  return (
    <div className="main-area">

      <Sidebar />

      <div className="main-content">

        <Header username={username} />

        <main className="content">
          {children}
        </main>

      </div>

    </div>
  );
};

export default MainArea;