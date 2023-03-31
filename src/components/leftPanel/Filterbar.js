import React from 'react';
import { useQuery } from 'react-query';
import brandService from '../../service/brandService';
import categoryService from '../../service/categoryService';
import FilterPanel from './FilterPanel';

const Filterbar = () => {

  return (
    <div className='filterbar'>
      <FilterPanel name={'Category'} getOptionsService={categoryService.getAllCategories} queryString={'getCategories'} />
      <FilterPanel name={'Brand'} getOptionsService={brandService.getAllBrands} queryString={'getBrands'} />
    </div>
  );
}

export default Filterbar;
