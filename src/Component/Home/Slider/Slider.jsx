import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/swiper-bundle.css';
import sl1 from '../../../assets/Image/sl-1.jpeg'
import sl2 from '../../../assets/Image/sl-2.jpeg'
import sl3 from '../../../assets/Image/sl-3.jpeg'
import sl4 from '../../../assets/Image/sl-4.jpeg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFlip } from 'swiper/modules';
import { Container } from 'react-bootstrap';


const Slider = () => {
    return (
        <Container>
      <div className='slider-area'>

                     <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip]}
             spaceBetween={50}
             effect="flip"
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
      
    >
      <SwiperSlide>
        <img src={sl1} style={{width:"100%", height: "70vh"}}></img>
      </SwiperSlide>
      <SwiperSlide><img src={sl2} style={{width:"100%", height: "70vh"}}></img></SwiperSlide>
      <SwiperSlide><img src={sl3} style={{width:"100%", height: "70vh"}}></img></SwiperSlide>
      <SwiperSlide><img src={sl4} style={{width:"100%", height: "70vh"}}></img></SwiperSlide>
    </Swiper>
    </div>

        </Container>
    );
};

export default Slider;