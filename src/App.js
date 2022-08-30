import './App.css';
import Navbar  from './components/Navbar/Navbar';
import Home from './container/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pool from './container/Pool/Pool'
import Video from './container/Vedio/Vedio'
import Magazine from './container/Magazine/Magazine';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/vedio" element={<Video/>}></Route>
            <Route path="/pool" element={<Pool/>}></Route>
            <Route path="/magazine" element={<Magazine/>} ></Route>
       </Routes>
            
        
      </Router>
         
      
   

    </div>
  );
}

export default App;
