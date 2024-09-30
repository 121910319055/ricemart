import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => {
  const banners = [
    { id: 1, src: 'bnk1.jpg', alt: 'Banner 1' },
    { id: 2, src: 'bnk2.jpg', alt: 'Banner 2', text: 'Discover Our Products' },
    { id: 3, src: 'bnn3.jpg', alt: 'Banner 3', text: 'Join Our Community' },
    { id: 4, src: 'bnn4.jpg', alt: 'Banner 4', text: 'Explore the Future' },
    { id: 5, videoSrc: 'promo.mp4', alt: 'Video Banner', text: 'Watch Our Promo Video' }, // New Video Slide
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
          {banner.videoSrc ? (
            <video className="banner-video" src={banner.videoSrc} alt={banner.alt} autoPlay loop muted />
          ) : (
            <img src={banner.src} alt={banner.alt} />
          )}
          <p className="legend">{banner.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
