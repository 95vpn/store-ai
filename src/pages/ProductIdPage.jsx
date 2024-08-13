import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProducstCard from '../components/homePage/ProducstCard';
import { getProductsThunk } from '../store/slices/products.slice';
import './styles/productIdPage.css'

const ProductIdPage = () => {

  const [productName, setProductName] = useState('')

  const products = useSelector(store => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://store-productos-database-production.up.railway.app/api/v1/products'
    dispatch(getProductsThunk(url))
  }, []);



  return (
    <div>
      <ProducstCard
        products={products}
        productName={productName}
        setProductName={setProductName}
      />
      
    </div>
  )
}

export default ProductIdPage;