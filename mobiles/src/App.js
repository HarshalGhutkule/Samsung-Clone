
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { WhatsNew } from './Component/What\'sNew/What\'sNew';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactCurousel } from './Component/Carousel/Carousel';
import { ImageLoaded } from './Component/Image-loaded/ImageLoaded';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReactCurousel/>
      <WhatsNew/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2108/pcd/smp/pc/PCD_COMBO_KV_Main-KV_1440X640_LTR.jpg?$1440_640_JPG$"} title={"Galaxy Z"} description={"Unfold your world with the completely reimagined smartphone experience."} top={"1500px"} color={"black"} margin={"55%"}/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_Combo_KV_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$"} title={"Galaxy S"} description={"Welcome to the epic standard"} top={"2120px"} color={"black"} margin={"10%"}/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/pcd/smartphones/04_galaxy_note_pc.jpg?$1440_640_JPG$"} title={"Galaxy Note"} description={"The Powerphone that empowers your work and play"} top={"2800px"} color={"white"} margin={"55%"}/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2203/pcd/PCD_KV_optC_PC_1440X640.jpg?$1440_640_JPG$"} title={"Galaxy A Series"} description={"Awesome is for everyone"} top={"3350px"} color={"black"} margin={"10%"}/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_Ecosystem_KV_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$"} title={"Amazing Alone.Better Together"} description={"Awesome is for everyone"} top={"3950px"} color={"black"} margin={"10%"}/>
      <Routes>
        <Route path='' element={""}/>
      </Routes>
    </div>
  );
}

export default App;
