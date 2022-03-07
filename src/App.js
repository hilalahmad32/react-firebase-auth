import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { GlobalContext } from './context-api/GlobalContext';

function App() {
  const { token } = useContext(GlobalContext)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {token == "" ? (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </>
        ):("") 
        }
        <Route path='/*' element={<Navigate to={token ? "/":"login"} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
