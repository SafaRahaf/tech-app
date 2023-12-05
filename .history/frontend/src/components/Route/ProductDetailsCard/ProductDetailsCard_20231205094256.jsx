import React, { useEffect, useState } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addTocart } from '../../../redux/actions/cart';
import {
  addToWishlist,
  removeFromWishlist
} from '../../../redux/actions/wishlist';

const ProductDetailsCard = () => {
  return <div>ProductDetailsCard</div>;
};

export default ProductDetailsCard;
