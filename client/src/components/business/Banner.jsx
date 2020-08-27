import React from 'react';
import BannerContent from './banner/bannerContent';
import BannerBrand from './banner/bannerBrand';
import BannerSignup from './banner/bannerSignup';

const Banner = () => {
  return (
    <div>
      <BannerContent />
      <br/>
      <BannerBrand />
      <br />
      <BannerSignup />
    </div>
  )
};

export default Banner;