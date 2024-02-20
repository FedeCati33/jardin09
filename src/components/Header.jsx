import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

import './header.css';

import logoimage from '../assets/jardin-nombre.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header">

      <Link to='/'>
        <img
          className="header-logo"
          src={logoimage}
          alt="header logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-search_input" type="text"/>
        {/* logo */}
        <SearchIcon className='header-search_icon'/>
      </div>

      <div className="header-nav">
      <Link to='/log-in'>
          <div className="header-option">
            <span className="header-option_lineOne">Hola user</span>
            <span className="header-option_lineTwo">Sign In</span>
          </div>
        </Link>
        
        <div className="header-option">
          <span className="header-option_lineOne"></span>
          <span className="header-option_lineTwo">Compras</span>
        </div>
        
        <div className="header-option">
          <span className="header-option_lineOne">FAQS</span>
          <span className="header-option_lineTwo">Ayuda</span>
        </div>

        <div className="header-option">
          <span className="header-option_lineOne">Contactanos</span>
          <span className="header-option_lineTwo">Nosotros</span>
        </div>

        <Link to='/checkout'>
          <div className='header-option_cart'>
            <ShoppingCartIcon />
            <span className="header-option_cart_count">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default Header;
