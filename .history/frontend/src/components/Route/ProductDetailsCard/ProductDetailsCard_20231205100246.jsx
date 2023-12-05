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
  // const { cart } = useSelector((state) => state.cart);
  // const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error('Item already in cart!');
    } else {
      if (data.stock < count) {
        toast.error('Product stock limited!');
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success('Item added to cart successfully!');
      }
    }
  };

  // useEffect(() => {
  //   if (wishlist && wishlist.find((i) => i._id === data._id)) {
  //     setClick(true);
  //   } else {
  //     setClick(false);
  //   }
  // }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    // dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    // dispatch(addToWishlist(data));
  };

  return <div>ProductDetailsCard</div>;
};

export default ProductDetailsCard;
