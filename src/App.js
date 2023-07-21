import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skils from './pages/Skils';
function App() {
  return (
    <div className="App bg-slate-700 h-full  ">
      <div className=" container  mx-auto h-full flex flex-col justify-between">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Skils />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
