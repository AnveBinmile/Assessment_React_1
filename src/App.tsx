import './App.css';
import { Navbar,HomeScreen} from './commonComponents/Export';

function App() {
  return (
    <div className="App mx-auto w-5/6 flex flex-col gap-[50px]">
     <Navbar/>
     <HomeScreen/>
    </div>
  );
}

export default App;
