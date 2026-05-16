import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    
    products.map((item) => {
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transaction-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img 
                onClick={()=>setImage(item)}
                key={index}
                src={item}
                alt=""
                className='w-[24%] sm:w-full cursor-pointer sm:mb-3 flex-shrink-0'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img 
              src={image}
              alt=""
              className='w-full h-auto'
            />
          </div>
        </div>
        {/* Product info */}
        <div className='flex-1'>
          <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="w-3 5" />
            <img src={assets.star_icon} alt="w-3 5" />
            <img src={assets.star_icon} alt="w-3 5" />
            <img src={assets.star_icon} alt="w-3 5" />
            <img src={assets.star_dull_icon} alt="w-3 5" />
            <p className='text-sm text-gray-500'>(20 reviews)</p>
          </div>
          <p className='text-3xl font-medium mt-5'>{currency}{productData.price}</p>
          <p className='text-gray-500 mt-5 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={()=>setSize(item)}
                  key={index}
                  className={`border bg-gray-100 px-4 py-2 mr-2 mb-2' ${item === size ? 'border-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;
