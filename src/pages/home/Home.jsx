import MainArea from '../../components/MainArea/MainArea.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Home.css';

export default function Home() {

  const username = "Luca";
  const productsCount = 18;
  const categoriesCount = 5;

  return (
    <div className="home-layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="mainarea-container">
        <MainArea 
          username={username}
          productsCount={productsCount}
          categoriesCount={categoriesCount}
        />
      </div>
    </div>
  );
}