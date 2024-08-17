import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getToken from "../../utils/getToken";
const urlBase = 'https://store-productos-database-production.up.railway.app/api/v1/cart';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart: (currentValue, action) => [...currentValue, action.payload],
        deleteFromCart: (currentValue, action) => {
            currentValue.filter((prod) => (
                prod.id !== action.payload
            ));
        },
        setCart: (currentValue, action) => action.payload,
        updateCart:(currentValue, action) => {
            const { id, quantity } = action.payload;
            currentValue.map((prod) => {
                prod.id === id ? 
                prod.quantity = quantity : 
                prod
            });
        },
    }
});

export const {setCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartThunk = () => (dispatch) => {
    axios.get(urlBase, getToken())
        .then(res => (setCart(res.data)))
        .catch(err => console.log(err));
}

export const postCartThunk = (data) => (dispatch) => {
    axios.post(urlBase, data, getToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}