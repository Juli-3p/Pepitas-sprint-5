import MainArea from '../../components/MainArea/MainArea.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
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