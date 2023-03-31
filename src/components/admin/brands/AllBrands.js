import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import brandService from '../../../service/brandService';
import CustomTable from './CustomTable';

const AllBrands = ({update}) => {

  const { data, isLoading, error, refetch } = useQuery(
    'getAllBrands',
    () => brandService.getAllBrands(),
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
              deleteService={brandService.deleteBrand}
              objectName='brand'
            />
          ) : (
            <p>No Products</p>
          )}
        </>
        
      ) : (
        <p>Something went wrong...</p>
      )}
      
    </div>
  );
}

export default AllBrands;
