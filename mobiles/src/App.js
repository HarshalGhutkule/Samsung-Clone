
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { WhatsNew } from './Component/What\'sNew/What\'sNew';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactCurousel } from './Component/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReactCurousel/>
      <WhatsNew/>
      <Routes>
        <Route path='' element={""}/>
      </Routes>
    </div>
  );
}

export default App;
