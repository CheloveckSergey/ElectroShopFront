import React from 'react';
import { useState } from 'react';
import { RxTextAlignBottom } from 'react-icons/rx';
import { useQuery } from 'react-query';
import brandService from '../../service/brandService';
import categoryService from '../../service/categoryService';


const FilterPanel = ({ setBrandFilters }) => {

  const [checkboxes, setCheckboxes] = useState([]);

  const { error, isLoading } = useQuery(
    'getAllBrands',
    () => brandService.getAllBrands(),
    {
      onSuccess: data => {
        setCheckboxes(data.data.map((brand) => ({name: brand.name, checked: false})))
      },
    }
  );

  function handleChange(e) {
    const newCheckboxes = checkboxes.map(checkbox => {
      if (checkbox.name === e.target.name) {
        return {...checkbox, checked: !checkbox.checked}
      }
      return checkbox
    });
    setCheckboxes(newCheckboxes);
    setBrandFilters(newCheckboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.name));
  }

  return (
    <div 
      className='filter-panel'  
    >
      <div 
        className='filter-name'
      >
        <h3>
          Brand
        </h3>
        <button>
          <RxTextAlignBottom size={20} />
        </button>
      </div>
      <div className='options-container' >
        {checkboxes.map((checkbox, index) => 
          <div key={index} className='option'>
            <label for={checkbox.name}>
              <input checked={checkbox.checked} name={checkbox.name} type="checkbox" onChange={(e) => handleChange(e)}/>
              {checkbox.name}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterPanel;
