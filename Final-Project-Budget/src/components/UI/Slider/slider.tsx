import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.scss';
import classNames from 'classnames';


interface ISliderProps {
  items: { id:number; icon: string; title?: string; subtitle?: string; text: string; avatar?:string; name?: string }[];
  title?: string;
  stars?: string;
  className?: string;
  variant1?: string;
  variant2?: string;
}

const Slider: React.FC<ISliderProps> = ({ items, title, variant1, variant2, className }) => {
  return (
    <section className="slider-section">
      <div className="slider-section-header">
        <h2>{title}</h2>

        <div className="slider-section-header-buttons">
          <button className="swiper-button-prev filled"></button>
          <button className="swiper-button-next filled"></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classNames('slider-section-card', className, {
                        'slider-section-card-blue-bg': variant1 === 'blue',
                        'slider-section-card-none-bg': variant1 === 'none',
                        'slider-section-card-white-bg': variant1 === 'white',
                  })}>
              <img className={classNames('slider-section-card-img', className, {
                'slider-section-card-img-star': variant2 === 'star',
              })} src={item.icon} alt="icon" />
              {item.title && <h3>{item.title}</h3>}
              <p className="text">{item.text}</p>

              <div className='slider-section-card-user'>
                {item.avatar && <img src={item.avatar} alt="avatar" />}
                {item.name && <h3>{item.name}</h3>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;