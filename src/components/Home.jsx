import './home.css'

import bannerImage from '../assets/banner-1.webp';
import productImage from '../assets/3-1-product.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';


import Product from './Product';
import CategoryCard from './CategoryCard';

const Home = () => {

  return (
    <>
      <div className='home'>
        <div className='home-container'>
          <img
            className='home-image'
            src={bannerImage}
            alt='home image'
          />

          <div className='home-row'>

            <CategoryCard />

            <CategoryCard />     
          </div>

          <div className='home-row'>
          <Product 
            id='98765'
            title='producto2'
            price={19.99}
            rating={3}
            image={product2}
          />
          <Product
            id='product3' 
            title='producto3'
            price={119.99}
            rating={5}
            image={product3}            
          />            
          <Product
            id='12345' 
            title='3:1'
            price={29.99}
            rating={5}
            image={productImage}
          />        
          </div>

          <div className='home-row'>
          <Product
            id='12345' 
            title='3:1'
            price={29.99}
            rating={5}
            image={productImage}            
          />           
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;