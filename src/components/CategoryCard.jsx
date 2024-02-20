import "./categoryCard.css";
import categoryImg from '../assets/categoria-1.png'

const CategoryCard = () => {

  const onClickHandler = () => {
      console.log('click')
  }

  return (
    <>
      <div className="category-card-container">
        <div className="category-card" role='button' onClick={onClickHandler}>
          <img className='category-img' src={categoryImg}/>
        </div> 
      </div>
    </>
  );
};

export default CategoryCard;
