import React, { useState, useEffect } from 'react';
import { CarouselData } from './CarouselData';
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import './Carousel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide ] = useState(0);
    const slideLength = CarouselData.length; 
    
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
    
    const nextSlide = () => {
       setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)  
    }

    const prevSlide = () => {
       setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)  
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    useEffect(()=> {
        setCurrentSlide(0)
    }, [])

    useEffect(()=> {
        if (autoScroll) {
             auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <section className='slider'>
            <AiOutlineArrowLeft className='slider-arrow prev' onClick={prevSlide}/>
            <AiOutlineArrowRight  className='slider-arrow next' onClick={nextSlide}/>

            {CarouselData.map((slide, index ) => {
                return (
                    <div className={index === currentSlide ? 'slide current' : 'slide'} key={index }>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="slide" className='slider-img' />
                                <div className="slider-content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.Desc }</p>
                                    <hr /> 
                                    <button className="btn-primary">Create Account</button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Carousel


























// import React, { useState } from 'react';
// import { CarouselData } from './CarouselData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import './Carousel.css';

// const Carousel = ({ slides }) => {
//     const [current, setCurrent] = useState(0);
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }
//     console.log(current);

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }

//     return (
//         <section className='slider'>
//             <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//             <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//             {CarouselData.map((slide, index) => {
//                 return (
//                     <div className={index === current ? 'slide active' : 'slide'}
//                     key={index}>
//                     {index === current && (
//                         <img src={slide.image} alt='Medical image' className='image'/>
//                     )}
//                     </div>
//                 )
//             })}
//         </section>
//     )
// }

// export default Carousel

