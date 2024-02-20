import adImg from '../assets/ad.png'

import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';

import SubTotal from './SubTotal'
import './checkout.css'

const Checkout = () => {
  const [{ cart }] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          className='checkout-ad'
          src={adImg}
          alt='checkout ad'
        />

        <div>
          <h2 className='checkout-title'>Your shopping basket</h2>
          
          {cart.map(item => (
            <CheckoutProduct
              key={item.id} 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
           
          {/* CheckOutProduct */}
        </div>
      </div>

      <div className='checkout-right'>
        <SubTotal/>
      </div>
    </div>
  )
};

export default Checkout;