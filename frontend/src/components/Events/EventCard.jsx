import React from 'react';
import styles from '../../styles/styles';
import CountDown from './CountDown.jsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addTocart } from "../../redux/actions/cart";
import { toast } from 'react-toastify';

const EventCard = ({ active, data }) => {
  // const { cart } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    console.log('add to cart btn clicked ');
    // const isItemExists = cart && cart.find((i) => i._id === data._id);
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
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? 'unset' : 'mb-12'
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        {/* <img src={`${data.images[0]?.url}`} alt="" /> */}
        <img
          src={`https://stygen.gift/assets/uploads/product/1621235955-105981739_284076442952778_3442573533068397647_n.jpg`}
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        {/* <h2 className={`${styles.productTitle}`}>{data.name}</h2> */}
        <h2 className={`${styles.productTitle}`}>watch</h2>
        {/* <p>{data.description}</p> */}
        <p>HDFGVD DHUGJK kjdfghdfh jkdh kgj jhdg djk</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {/* {data.originalPrice}$ */} $346
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {/* {data.discountPrice}$ */}$253
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {/* {data.sold_out} sold */}
            654 sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          {/* <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link> */}
          <Link to={`/product/1?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
