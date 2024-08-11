import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProducstCard from '../components/homePage/ProducstCard';

const HomePage = () => {
  const products = useSelector(store => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'http://localhost:8080/api/v1/products'
    dispatch(getProductsThunk(url))
  }, [])

  

  return (
    <div>
      <h1>STORE</h1>
      <section>
        {
          products?.map(prod => (
            <ProducstCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </section>
    </div>
  )
}

export default HomePage;