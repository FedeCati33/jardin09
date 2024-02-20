import PropTypes from 'prop-types';
import { useStateValue } from '../StateProvider';
import './checkoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating}) => {
  const [ {cart}, dispatch ] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct-image' src={image}/>

      <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))
          }
        </div>
        <button onClick={removeFromCart}> Remove from cart</button>
      </div>
    </div>
  )
};

CheckoutProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default CheckoutProduct;