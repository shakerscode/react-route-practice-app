
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Fourm from './components/Fourm/Fourm';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Shope from './components/Shope/Shope';



function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shope></Shope>}></Route>
        <Route path='/shope' element={<Shope></Shope>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/form' element={<Fourm></Fourm>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}



export default App;
