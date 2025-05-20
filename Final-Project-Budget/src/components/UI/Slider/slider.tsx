import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import activityIcon from '../../../assets/svg/home-slider-activity.svg';
import walletIcon from '../../../assets/svg/home-slider-wallet.svg';
import paperIcon from '../../../assets/svg/home-slider-paper.svg';
import cardIcon from '../../../assets/svg/home-slider-card.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.scss';


const Slider = () => {
    const items = [
    { icon: activityIcon, text: "Simple interface/app that makes it easy to control your cash flows" },
    { icon: walletIcon, text: "Fast transaction entry - Add all transactions with one click" },
    { icon: paperIcon, text: "Creating templates to simplify and speed up the entry of transactions" },
    { icon: cardIcon, text: "Ability to control expenses of different accounts from one source" },
    { icon: activityIcon, text: "Simple interface that makes it easy to control your cash flows" },
    { icon: walletIcon, text: "Fast transaction entry. Add all transactions with one click" },
    { icon: paperIcon, text: "Creating templates to simplify and speed up the entry of transactions!" },
    { icon: cardIcon, text: "Ability to control expenses of different accounts from one source." },
  ];

  return (
     <div className="slider-section">
      <div className="slider-section-header">
       <h2>What the app does</h2>

       <div className="slider-section-header-buttons">
        <button className="swiper-button-prev filled"></button>
        <button className="swiper-button-next filled"></button>
       </div>
     </div>

     <Swiper
        modules={[Navigation]}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }}
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
      {items.map((item) => (
        <SwiperSlide key={item.text}>
          <div className="slider-section-card">
          <img src={item.icon} alt='icon' />
          <p className="text">{item.text}</p>
        </div>
        </SwiperSlide>
       ))}
     </Swiper>
     </div>
  );
};

export default Slider