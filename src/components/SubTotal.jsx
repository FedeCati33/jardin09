// import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer';

import './subtotal.css';
const SubTotal = () => {

  const [{ cart }] = useStateValue();
  
  return(
    <div className='subtotal'>
{/*       <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {`Subtotal (${cart.length} items)`}<strong>{`${value}`}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />

        <button>Proceed to Checkout</button> */}
    </div>
  )
};

export default SubTotal;