import { Routes, Route, Link } from 'react-router-dom';
import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';
import Pagina3 from './componentes/Pagina3';
import './App.css';

function App() {
  return (
    <>
      <header className='header'>
        <Link className='link' to='/'>Home </Link>
        <Link className='link' to='/Pagina1'>Página 01</Link>
        <Link className='link' to='/Pagina2'>Página 02</Link>
        <Link className='link' to='/Pagina3'>Página 03</Link>
      </header>
      <main>
        <Routes>
          <Route path='Pagina1' element={<Pagina1 />} />
          <Route path='Pagina2' element={<Pagina2 />} />
          <Route path='Pagina3' element={<Pagina3 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
