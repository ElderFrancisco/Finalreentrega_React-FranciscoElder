import ItemListContainer from '../src/components/ItemListContainer';
import Cart from '../src/components/Cart/index.jsx';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import ItemBuyContainer from '../src/components/ItemBuyContainer';
import Gracias from '../src/components/Gracias';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria' element={<ItemListContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/detalle/:id' element={<ItemDetailContainer />} />
      <Route path='/finalizar' element={<ItemBuyContainer />} />
      <Route path='/gracias' element={<Gracias />} />
    </Routes>
  );
};

export default Rutas;
