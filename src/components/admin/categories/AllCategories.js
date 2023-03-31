import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import categoryService from '../../../service/categoryService';
import CustomTable from '../brands/CustomTable';

const AllCategories = ({update}) => {

  const { data, isLoading, error, refetch } = useQuery(
    'getAllCategories',
    () => categoryService.getAllCategories(),
    {
      onSuccess: (data) => console.log(data),
    }
  )

  useEffect(() => {
    refetch()
  }, [update])

  return (
    <div className='all-brands'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error...</p>
      ) : data ? (
        <>
          {data.data.length > 0 ? (
            <CustomTable 
              objectsArray={data.data} 
              refetch={refetch}
              deleteService={categoryService.deleteCategory}
              objectName='category'
            />
          ) : (
            <p>No Categories</p>
          )}
        </>
        
      ) : (
        <p>Something went wrong...</p>
      )}
      
    </div>
  );
}

export default AllCategories;
