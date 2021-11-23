import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1 (2).jpg';
import banner2 from '../../images/banner5(2).jpg';
import banner3 from '../../images/banner3 (2).jpg';


const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{height: '70vh'}}
                    src={banner1}
                    alt="First slide"/>
                    
                <Carousel.Caption>
                    <h3>Buy More & Save More</h3>
                    <p>Sale OFF 20% all products.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height: '70vh'}}
                    src={banner2}
                    alt="Second slide"/>

                <Carousel.Caption>
                    <h3>New Dita Sunglasses</h3>
                    <p>Sale OFF 20% all products.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img
                    className="d-block w-100" style={{height: '70vh'}}
                    src={banner3}
                    alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Designer Frems 50% Off.</h3>
                    <p>Sale OFF 20% all products.</p>
             </Carousel.Caption>
            </Carousel.Item>
    </Carousel>   
       </>
    );
};

export default Banner;