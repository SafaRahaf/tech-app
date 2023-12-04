import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';

const Dropdown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return <div>Dropdown</div>;
};

export default Dropdown;
