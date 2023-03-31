import React, { useState } from 'react';
import AddBrand from './AddBrand';
import AllBrands from './AllBrands';

const EditBrands = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className='edit-brands'>
      <AddBrand update={update} setUpdate={setUpdate} />
      <AllBrands update={update} />
    </div>
  );
}

export default EditBrands;
