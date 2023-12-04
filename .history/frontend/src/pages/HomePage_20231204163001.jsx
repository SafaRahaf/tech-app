import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Route/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <Hero />
      <Footer />
    </>
  );
};

export default HomePage;
