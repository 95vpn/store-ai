import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';
import ProducstCard from '../components/productIdPage/ProducstCard';

const CartPage = () => {

  const cart = useSelector(store => store.cart);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, []);

  console.log(cart)

  return (
    <div>CartPage
      <ProducstCard/>
    </div>
  )
}

export default CartPage;