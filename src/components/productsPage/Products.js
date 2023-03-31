import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import brandService from '../../service/brandService';
import categoryService from '../../service/categoryService';
import productService from '../../service/productService';
import FilterPanel from './FilterPanel';
import ProductList from './ProductList';


const filterObjects = [
  {
    filterHeader: 'Brands',
    filterName: 'brands',
    getService: brandService.getAllBrands
  },
  {
    filterHeader: 'Categories',
    filterName: 'categories',
    getService: categoryService.getAllCategories
  }
];

// [
//   {
//     brands: [

//     ] 
//   }
// ]

const lol = 'lol';

const Products = () => {
  const [brandFilters, setBrandFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);

  // const [brands, setBrands] = useState([]);
  // const [categories, setCategories] = useState([]);

  const [filters, setFilters] = useState(filterObjects.map(filterObject => ({
    [filterObject.filterName]: []
  })));


  const [pageQty, setPageQty] = useState(null);
  const [curPageNumber, setCurPageNumber] = useState(1);

  function getPages(pageQty) {
    let pages = [];
    for (let i = 0; i < pageQty; i++) {
      pages.push(i + 1)
    }
    return pages;
  }


  const {data, isLoading, error, refetch} = useQuery(
    ['getProductsWithFilters', curPageNumber],
    () => {
      console.log(categoryFilters);
      console.log(brandFilters);
      return productService.getAllProductsWithFilter(categoryFilters, brandFilters, curPageNumber)
    } ,
    {
      onSuccess: data => {
        setPageQty(data.data.pageQty);
        // console.log(data.data. products);
      } 
    }
  )


  // const {} = useQuery(
  //   'getAllCategories',
  //   () => categoryService.getAllCategories(),
  //   {
  //     onSuccess: data => setCategories(data.data),
  //   }
  // )
  

  function handleApply() {
    // console.log(brandFilters);
    // setCurPageNumber(1);
    // refetch();
    console.log(filters);
  }

  return (
    <div className='all-products'>
      <h1>All Our Products</h1>
      <p>Blablabla blabla blala blalalab blalalala blablabla blablabla </p>
      <div className='filter-section'>
        {filterObjects.map((filterObjects, index) => 
          <FilterPanel />
        )}
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
