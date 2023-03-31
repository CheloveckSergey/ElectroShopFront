import React, { useContext } from 'react';
import { ProductContext } from '../../context/StoreProvider';
import BasketPanel from './BasketPanel';
import TotalPanel from './TotalPanel';

const RightPanel = () => {
  const { addedProducts } = useContext(ProductContext);

  return (
    <div className='right-panel'>
      <BasketPanel addedProducts={addedProducts} />
      {addedProducts.length > 0 && (
        <div>
          <TotalPanel addedProducts={addedProducts} />
          <div className='checkout'>
            CHECKOUT
          </div>
        </div>
      )}      
    </div>
  );
}

export default RightPanel;
