import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import brandService from '../../service/brandService';
import categoryService from '../../service/categoryService';
import productService from '../../service/productService';
import ProductList from './ProductList';

const Products = () => {
  const [brandFilters, setBrandFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);

  const [pageQty, setPageQty] = useState(null);
  const [curPageNumber, setCurPageNumber] = useState(1);

  const {data, isLoading, error, refetch} = useQuery(
    ['getProductsWithFilters', brandFilters, curPageNumber],
    () => {
      console.log(curPageNumber);
      return productService.getAllProductsWithFilter(categoryFilters, brandFilters, curPageNumber)
    } ,
    {
      onSuccess: data => {
        setPageQty(data.data.pageQty);
        console.log(data.data. products);
      } 
    }
  )

  const brandRef = useRef(null);
  const categoryRef = useRef(null);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const {} = useQuery(
    'getAllBrands',
    () => brandService.getAllBrands(),
    {
      onSuccess: data => setBrands(data.data),
    }
  );

  const {} = useQuery(
    'getAllCategories',
    () => categoryService.getAllCategories(),
    {
      onSuccess: data => setCategories(data.data),
    }
  )
  

  function handleApply() {
    const brandInputs = brandRef.current.querySelectorAll(':checked');
    if (!brandInputs) return;
    const brandFilters = Array.from(brandInputs).map((brandInput) => brandInput.value);
    setBrandFilters(brandFilters);

    const categoryInputs = categoryRef.current.querySelectorAll(':checked');
    if (!categoryInputs) return;
    const categoryFilters = Array.from(categoryInputs).map((categoryInput) => categoryInput.value);
    setCategoryFilters(categoryFilters);

    setCurPageNumber(1);
    refetch();
  }


  function getPages(pageQty) {
    let pages = [];
    for (let i = 0; i < pageQty; i++) {
      pages.push(i + 1)
    }
    return pages;
  }

  return (
    <div className='all-products'>
      <h1>All Our Products</h1>
      <p>Blablabla blabla blala blalalab blalalala blablabla blablabla </p>
      <div className='filter-section'>
        <div ref={brandRef} className='filter'>
          <h4>Brand</h4>
          {brands.map((brand, index) => 
            <label><input type="checkbox" value={brand.name} />{brand.name}</label>
          )}
        </div>
        <div ref={categoryRef} className='filter'>
          <h4>Category</h4>
          {categories.map((category, index) => 
            <label><input type="checkbox" value={category.name} />{category.name}</label>
          )}
        </div>
        <button onClick={handleApply}>Apply</button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : data ? (
        <ProductList products={data.data.products}/>
      ) : (
        <div>Something went wrong</div>
      )}
      <div className='pages-container'>
        {getPages(pageQty).map((pageNumber, index) => 
          <span 
            key={index} 
            className={pageNumber == curPageNumber ? 'checked' : ''}
            onClick={() => {
              if (pageNumber == curPageNumber) return;
              setCurPageNumber(pageNumber);
              refetch();
            }}
          >
            {pageNumber}
          </span>
        )}
      </div>
    </div>
  );
}

export default Products;
