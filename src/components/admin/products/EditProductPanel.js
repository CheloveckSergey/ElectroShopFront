import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import productService from '../../../service/productService';

const EditProductPanel = ({ product }) => {

  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [brand, setBrand] = useState(product.brand);
  const [price, setPrice] = useState(product.price);
  const [img, setImg] = useState(product.img && `http://localhost:5000/${product.img}`);

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const ref = useRef();

  const defaultImg = 'http://localhost:5000/0e2cd675e52cacec70523aaf9a0ad8c5.jpg';

  const {isLoading, refetch} = useQuery(
    ['addProduct', name], 
    () => productService.updateProduct(new FormData(ref.current), product.id),
    {
      enabled: false,
      onSuccess: (data) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false)
        }, 1000)
      },
      onError: (error) => {
        setError(true);
        setTimeout(() => {
          setError(false)
        }, 1000)
      }
    }
  );

  function selectChange(e) {
    e.target.closest('.field').classList.add('changed');
  }

  return (
      <div className='add-product-panel'>
        <form ref={ref} onSubmit={(e) => e.preventDefault()}>
          <div className='field'>
            <label htmlFor='name'>Enter product name</label><br/>
            <input 
              type="text" 
              name='name' 
              value={name} 
              onChange={(e) => {
                setName(e.target.value);
                selectChange(e);
              }}
            />
          </div>
          <div className={`field`}>
            <label htmlFor='category'>Choose category</label><br/>
            <select 
              name='category'
              value={category} 
              onChange={(e) => {
                setCategory(e.target.value);
                selectChange(e)
              }}
            >
              <option value="headphones" key="1">Headphones</option>
              <option value="phones" key="2">Phones</option>
            </select>
          </div>
          <div className={`field`}>
            <label htmlFor='brand'>Choose brand</label><br/>
            <select 
              name='brand'
              value={brand} 
              onChange={(e) => {
                setBrand(e.target.value);
                selectChange(e)
              }}
            >
              <option value="apple" key="1">Apple</option>
              <option value="sony" key="2">Sony</option>
            </select>
          </div>
          <div className={`field`}>
            <label htmlFor='price'>Enter price</label><br/>
            <input 
              type="text" 
              name='price'
              value={price} 
              onChange={(e) => {
                setPrice(e.target.value);
                selectChange(e)
              }}
            />
          </div>
          <div className={`field`}>
            <label htmlFor='img'>Add Image</label>
            <input 
              type="file" 
              name='img' 
              onChange={(e) => {
                const fileReader = new FileReader();
                fileReader.onload = function() {
                  setImg(fileReader.result);
                  selectChange(e);
                }
                fileReader.readAsDataURL(e.target.files[0]);
              }}
            />
          </div>
          <br/>
          <button
            onClick={() => refetch()}
          >
            Update Product
          </button>
        </form>
        <div>
          <img src={`${img ? img : defaultImg}`} alt="IMG" />
          {isLoading ? (
            <p>Loading...</p>
          ) : success ? (
            <p className='success'>Product seccessfully added</p>
          ) : error ? (
            <p className='error'>Error while adding</p>
          ) : ''}
        </div>
      </div>
  );
}

export default EditProductPanel;
