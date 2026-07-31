import MainArea from '../../../public/MainArea.jsx';
import Sidebar from '../../../public/Sidebar.jsx';
import './Home.css';

export default function Home() {
  return (
    <div className="home-layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="mainarea-container">
        <MainArea />
      </div>
    </div>
  );
}
