import React, { useState } from 'react';
import AddCategory from './AddCategory';
import AllCategories from './AllCategories';

const AdminCategories = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className='edit-brands'>
      <AddCategory update={update} setUpdate={setUpdate} />
      <AllCategories update={update} />
    </div>
  );
}

export default AdminCategories;
