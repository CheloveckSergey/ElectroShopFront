import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ProductContext } from '../../context/StoreProvider';
import { useNavigate } from 'react-router-dom';

const DescPanel = ({ product }) => {
  const { addedProducts, addProduct, deleteProduct, deleteSingleProduct, findProductByName } = useContext(ProductContext);

  const URL = 'http://localhost:5000/';

  const addedProduct = findProductByName(product.name);

  function handleDeleteClick() {
    if (!addedProduct) return;

    if (addedProduct.qty == 1) {
      deleteProduct(product);
      return;
    }

    deleteSingleProduct(product);
  }

  function handleAddClick() {
    addProduct(product)
  }

  const navigate = useNavigate();

  return (
    <div className='desc-panel'>
      <img src={URL + product.img} alt="IMG" />
      <div className='right'>
        <button 
          className='close-button'
          onClick={() => navigate(-1)}
        >
          <IoMdClose size={30} />
        </button>
        <div className='base'>
          <h4>{product.category}</h4>
          <h1>{product.name}</h1>
          <h4>{product.brand}</h4>
          <table>
            <thead>
              <th>Quantity</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr key="0">
                <td>
                  <div className='qty'>
                    <button
                      onClick={handleDeleteClick}
                    >
                      <AiOutlineMinusCircle size={20} />
                    </button>
                    <p>
                      {addedProduct ? addedProduct.qty : 0 }
                    </p>
                    <button
                      onClick={handleAddClick}
                    >
                      <AiOutlinePlusCircle size={20} />
                    </button>
                  </div>
                </td>
                <td>100$</td>
              </tr>
            </tbody>
          </table>
          <p>
            Here must be some description. 
            But I'm too lazy to make one more field in database. 
            That's why you're going to see the same text whatever product you choose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescPanel;
