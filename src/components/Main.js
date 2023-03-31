import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsAdmin from './admin/products/ProductsAdmin';
import Basket from './basket/Basket';
import EditBrands from './admin/brands/EditBrands';
import EditProduct from './admin/products/EditProduct';
import Homepage from './Homepage';
import Products from './productsPage/Products';
import AdminCategories from './admin/categories/AdminCategories';
import ProductDesc from './descPage/ProductDesc';

const Main = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/productsAdmin' element={<ProductsAdmin />} />
        <Route path='/allProducts' element={<Products />} />
        <Route path='/product/:name' element={<EditProduct />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/editBrands' element={<EditBrands />} />
        <Route path='/adminCategories' element={<AdminCategories />} />
        <Route path='/product/description/:name' element={<ProductDesc />} />
      </Routes>
    </div>
  );
}

export default Main;
