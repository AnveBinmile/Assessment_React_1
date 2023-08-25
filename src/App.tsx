import './App.css';
// import Navbar from './components/Navbar';
import Navbar from './pages/Navbar/index';
import Layout from './pages/Layout/index';

function App() {
  return (
    <div className="App mx-auto w-5/6 flex flex-col gap-[50px]">
     <Navbar/>
     <Layout/>
    </div>
  );
}

export default App;
