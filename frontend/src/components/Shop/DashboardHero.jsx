import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from 'react-icons/ai';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { MdBorderClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersOfShop } from '../../redux/actions/order.jsx';
import { getAllProductsShop } from '../../redux/actions/product';
// import { Button } from '@material-ui/core';
// import { DataGrid } from '@material-ui/data-grid';

const DashboardHero = () => {
  return <div>DashboardHero</div>;
};

export default DashboardHero;
