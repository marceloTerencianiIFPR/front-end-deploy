import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';


function App() {
  return (
    <>
      {/*  <Header/> */}
      <BrowserRouter>
        <Routes>

          <Route element={<PrivateRouter />}>
            <Route path='/'
              element={<DefaultLayout><Home /></DefaultLayout>} />
            {/* Inserir outras rotas de acesso restrito */}  
          </Route>
          
          <Route path='/login'
            element={<SimpleLayout><Login /></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
