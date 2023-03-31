import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const FilterPanel = ({ name, getOptionsService, queryString }) => {

  const [options, setOptions] = useState([]);

  const {} = useQuery(
    queryString,
    () => getOptionsService(),
    {
      onSuccess: data => setOptions(data.data),
    }
  )

  return (
    <div 
      className='filter-panel'
      onClick={(e) => e.target.classList.toggle('showed')}
    >
      {name}
      <div className='options-container'>
        {options.length > 0 && options.map((option, index) => 
          // <div 
          //   className='option' 
          //   key={index}
          //   onClick={() => {}}
          // >
          //   {option.name}
          // </div>
          <input type="checkbox" className='option' value={option.name}/>
        )}
      </div>
    </div>
  );
}

export default FilterPanel;
