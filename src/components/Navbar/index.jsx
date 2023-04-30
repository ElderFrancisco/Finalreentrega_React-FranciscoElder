import CartWidget from '../CartWidget';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.Container}>
      <nav>
        <div className={styles.nav}>
          <NavLink className='nav_link' to='/'>
            Chocolateria
          </NavLink>
        </div>
        <ul className='nav_list'>
          <li>
            <NavLink to='/categoria' className='nav_link'>
              Chocolates
            </NavLink>
          </li>
        </ul>
        <NavLink to='/cart' className='nav_link'>
          <CartWidget />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
