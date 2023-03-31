import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const CustomTable = ({objectsArray, objectName, deleteService, refetch}) => {

  return (
  
      <table className='custom-table'>
        <thead>
          {Object.keys(objectsArray[0]).map((header, index) => 
            <th key={index}>{header}</th>
          )}
        </thead>
        <tbody>
          {objectsArray.map((object, index) =>
            <tr key={index}>
              {Object.values(object).map((value, index) => 
                <td key={index}>{value}</td>
              )}
              <td>
                <button
                  className='edit-button'
                  style={{marginRight: '10px'}}
                >
                  <NavLink to={`/${objectName}/${object.name}`}>
                    <FiEdit2 size={20} />
                  </NavLink>
                </button>
                <button
                  className='delete-button'
                  onClick={async () => {
                    console.log(object.name);
                    await deleteService(object.name);
                    refetch();
                  }}
                >
                  <AiFillDelete size={20} />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

  );
}

export default CustomTable;
