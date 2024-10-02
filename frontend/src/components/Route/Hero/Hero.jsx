import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../../styles/styles";
import '../../../Assests/css/hero.css';
import { IoIosArrowForward, IoIosArrowBack, FcDownLeft } from '../../../Assests/icons/icons';
import slider1 from '../../../Assests/images/slider1.jpg';
import slider2 from '../../../Assests/images/slider2.jpg';
import slider3 from '../../../Assests/images/slider3.jpg';
import slider4 from '../../../Assests/images/slider4.jpg';
import slider6 from '../../../Assests/images/slider6.jpg';
import slider7 from '../../../Assests/images/slider7.jpg';
import furniture from '../../../Assests/images/furniture.jpg';

const Hero = () => {
  let slideIndex = 0;
  let autoSlide;
  const slidesRef = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const stopSlider = sliderContainer.querySelectorAll('.stopSlider');

    function initiateSlide() {
      autoSlide = setInterval(() => {
        changeSlide('next');
      }, 3000);
    }

    // initiateSlide();  to start slider
    stopSlider.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
      });
    })

    stopSlider.forEach((item) => {
      item.addEventListener('mouseleave', () => {
        initiateSlide();
      });
    });


    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  function changeSlide(command) {
    const slides = slidesRef.current;
    const sliderContainer = sliderContainerRef.current;
    const count = slides.getElementsByClassName('sliderItem').length;
    if (command === 'next') {
      slideIndex = (slideIndex + 1) % count;
    } else if (command === 'back') {
      slideIndex = (slideIndex - 1 + count) % count;
    }
    slides.style.transform = `translateX(${slideIndex * -100}%)`;
  }

  return (
    <>
      {/* slider  */}
      <div className="SliderMain-Container" ref={sliderContainerRef}>
        <div className="wrapper" ref={slidesRef}>

          <div className="sliderItem">
            <img src={slider6} alt='slider-image' />
            <span className="Slider1Text">Elevate Your Style, Shop the Latest Trends! Discover Fashion at Its Finest.</span>
            <button className="Slider1Btn">Shop Now <FcDownLeft size={25} /></button>
          </div>

          <div className="sliderItem">
            <img src={slider7} alt='slider-image' />
            <span className="Slider2Text">Elevate Your Style, Shop the Latest Trends! Discover Fashion at Its Finest.</span>
            <button className="Slider2Btn">Shop Now <FcDownLeft size={25} /></button>
          </div>

          <div className="sliderItem">
            <img src={slider3} alt='slider-image' />
            <span className="Slider3Text">
              Experience Innovation, Unleash the Power. Shop the Latest Electronic Gadgets Now!</span>
            <button className="Slider3Btn">Shop Now <FcDownLeft size={25} /></button>
          </div>

          <div className="sliderItem">
            <img src={slider4} alt='slider-image' />
            <span className="Slider4Text">
              Seamless Joy: Online E-card Payments Accepted Here. Share Happiness Instantly!</span>
            <button className="Slider4Btn">Shop Now <FcDownLeft size={25} /></button>
          </div>

          <div className="sliderItem">
            <img src={slider2} alt='slider-image' />
            <span className="Slider5Text">
              Local Charm, Unbeatable Prices! Explore Quality Finds at Affordable Rates</span>
            <button className="Slider5Btn">Shop Now <FcDownLeft size={25} /></button>
          </div>

        </div>
        <button className='stopSlider' onClick={() => changeSlide('back')}><IoIosArrowBack /></button>
        <button className='right stopSlider' onClick={() => changeSlide('next')}><IoIosArrowForward /></button>
      </div>

      {/* slider 2 */}
      <div className="secondSection">
        <img src={furniture} />
        <h3>Time to Upgrade: Stunning Furniture for Every Room</h3>
        <NavLink to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </NavLink>
      </div>

    </>
  );
};

export default Hero;
