import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import brandService from '../../../service/brandService';

const AddBrand = ({ update, setUpdate }) => {
  
  const {refetch} = useQuery(
    'addBrand',
    () => brandService.addBrand(new FormData(ref.current)),
    {
      enabled: false,
      onSuccess: (data) => {
        console.log(data);
        setUpdate(!update);
      } ,
    }
  )

  const ref = useRef(null);

  return (
    <div className='add-brand-panel'>
      <form 
        ref={ref}
        onSubmit={(e) => e.preventDefault()}
      >
        <label for='name'>Enter the brand's name</label>
        <input type="text" name='name' />
        <button
          onClick={() => refetch()}
        >
          Add Brand
        </button>
      </form>
    </div>
  );
}

export default AddBrand;
