import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const products = useSelector(store => store.products);
  console.log(products)

  return (
    <div>
        <h1>STORE</h1>
    </div>
  )
}

export default HomePage;