import { UseCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalItems } = UseCartContext();

  return (
    <>
      <span>{totalItems() || ''}</span>
      <i className='bi bi-cart3'></i>
    </>
  );
};

export default CartWidget;
