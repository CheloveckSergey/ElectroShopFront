import React from 'react';
import { SlBasket } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

const BasketPanel = ({ addedProducts }) => {
  return (
    <div className='basket-panel'>
      <NavLink to='/basket' className='basket' style={{textDecoration: 'none', color: 'inherit'}}>
        <SlBasket size={35} />
        {addedProducts.length > 0 && (
          <div className='qty'>
            {addedProducts.length}
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default BasketPanel;
