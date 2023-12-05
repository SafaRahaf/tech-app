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
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import {
  addToWishlist,
  removeFromWishlist
} from '../../../redux/actions/wishlist';
import { useEffect } from 'react';
import { addTocart } from '../../../redux/actions/cart.jsx';
import { toast } from 'react-toastify';
import Ratings from '../../Products/Ratings';

const ProductCard = () => {
  return <div>ProductCard</div>;
};

export default ProductCard;
