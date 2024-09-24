import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => {
  const banners = [
    { id: 1, src: 'bnk1.jpg', alt: 'Banner 1', text: 'Welcome to Our Site' },
    { id: 2, src: 'bnk2.jpg', alt: 'Banner 2', text: 'Discover Our Products' },
    { id: 3, src: 'bnn3.jpg', alt: 'Banner 3', text: 'Join Our Community' },
    { id: 4, src: '/images/banner4.jpg', alt: 'Banner 4', text: 'Explore the Future' }, // New Slide for Bounce
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      className="banner-carousel"
    >
      {banners.map((banner) => (
        <div key={banner.id} className="banner-slide">
          <img src={banner.src} alt={banner.alt} />
          <p className="legend">{banner.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
