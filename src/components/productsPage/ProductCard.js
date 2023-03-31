import React, { useContext } from 'react';
import {BiCartAdd} from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../context/StoreProvider.js';

const ProductCard = ({product}) => {
  const {addProduct, findProductByName} = useContext(ProductContext);

  const addedProduct = findProductByName(product.name);

  return (
    <div className='product-card'>
      <div className='upper-block'>
        <img src={product.img ? `http://localhost:5000/${product.img}` : 'https://www.b17.ru/foto/uploaded/upl_auto_1651487751_340608_1rjw.jpg'} alt="ProductCard" />
        <div className='rate-panel'>
          <div>Rating</div>
          <div>{product.rating}</div>
        </div>
        <div className='buy-panel'>
          <button
            className='add-button'
            onClick={() => addProduct(product)}
          >
            <BiCartAdd />
          </button>
          <button className='desc'>
            <NavLink style={{textDecoration: "none", color: 'inherit'}} to={`/product/description/${product.name}`}>
              <BsEyeFill />
            </NavLink>
          </button>      
        </div>
      </div>
      <div className='lower-block'>
        <h6>{product.brand}</h6>
        <h3 className={addedProduct && 'added'}>{product.name}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
