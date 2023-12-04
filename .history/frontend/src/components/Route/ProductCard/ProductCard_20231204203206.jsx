import React, { useState } from 'react';
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard.jsx';
import {
  addToWishlist,
  removeFromWishlist
} from '../../../redux/actions/wishlist.jsx';
import { useEffect } from 'react';
import { addTocart } from '../../../redux/actions/cart';
import { toast } from 'react-toastify';
import Ratings from '../../Products/Ratings.jsx/index.js';

const ProductCard = () => {
  //     const { wishlist } = useSelector((state) => state.wishlist);
  //   const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (wishlist && wishlist.find((i) => i._id === data._id)) {
  //       setClick(true);
  //     } else {
  //       setClick(false);
  //     }
  //   }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    console.log('removeFromWishlistHandler');
    // setClick(!click);
    // dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    console.log('addToWishlistHandler');
    // setClick(!click);
    // dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    console.log('addToCartHandler');
    // const isItemExists = cart && cart.find((i) => i._id === id);
    // if (isItemExists) {
    //   toast.error("Item already in cart!");
    // } else {
    //   if (data.stock < 1) {
    //     toast.error("Product stock limited!");
    //   } else {
    //     const cartData = { ...data, qty: 1 };
    //     dispatch(addTocart(cartData));
    //     toast.success("Item added to cart successfully!");
    //   }
    // }
  };

  return <div>ProductCard</div>;
};

export default ProductCard;
