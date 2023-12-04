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
  return <div>ProductCard</div>;
};

export default ProductCard;
