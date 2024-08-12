import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProducstCard from '../components/homePage/ProducstCard';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductIdPage = () => {

  const products = useSelector(store => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://store-productos-database-production.up.railway.app/api/v1/products'
    dispatch(getProductsThunk(url))
  }, []);

  console.log(products)

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

export default ProductIdPage;