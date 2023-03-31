import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({showSidebar, setShowsidebar}) => {
  return (
    <div
      className={`sidebar ${showSidebar ? 'opened' : 'closed'}`}
      onClick={(e) => {
        if (e.target.tagName == 'A') {
          setShowsidebar(false);
        };
      }}
    >
      <h4>Burger Menu</h4>
      <h3><Link className='cansel' to='/' >Home</Link></h3>
      <h3><Link className='cansel' to='/productsAdmin' >Products Admin</Link></h3>
      <h3><Link className='cansel' to='/allProducts' >All Products</Link></h3>
      <h3><Link className='cansel' to='/editBrands' >Brands</Link></h3>
      <h3><Link className='cansel' to='/adminCategories' >Categories</Link></h3>
      <h3>Favorites</h3>
    </div>
  );
}

export default Sidebar;
