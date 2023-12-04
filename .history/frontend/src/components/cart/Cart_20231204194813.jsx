import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineMinus, HiPlus } from 'react-icons/hi';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from 'react-toastify';

const Cart = ({ setOpenCart }) => {
  // const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    // dispatch(removeFromCart(data));
  };

  // const totalPrice = cart.reduce(
  //   (acc, item) => acc + item.qty * item.discountPrice,
  //   0
  // );

  const quantityChangeHandler = (data) => {
    // dispatch(addTocart(data));
  };
  return <div>Cart</div>;
};

export default Cart;
