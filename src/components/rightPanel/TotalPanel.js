import React, { useState } from 'react';

const TotalPanel = ({ addedProducts }) => {
  const [discount, setDiscount] = useState(10);

  function getTotalQty(addedProducts) {
    const totalQty = addedProducts.reduce((sum, curProduct) => {
      return sum + curProduct.qty 
    }, 0);
    return totalQty;
  }

  function getTotal(addedProducts) {
    const total = addedProducts.reduce((sum, curProduct) => {
      return sum + curProduct.qty * curProduct.price 
    }, 0);
    return total;
  }

  return (
    <div className='total-panel'>
      <table>
        <tbody>
          <tr>
            <td className='left-col'>Quantity</td>
            <td>{getTotalQty(addedProducts)}</td>
          </tr>
          <tr>
            <td className='left-col'>Total</td>
            <td>{getTotal(addedProducts)}$</td>
          </tr>
          <tr>
            <td className='left-col'>Discount</td>
            <td>-{discount}$</td>
          </tr>
          <tr>
            <td className='left-col total-row'>Total</td>
            <td className='total-row total'>{getTotal(addedProducts) - discount}$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalPanel;
