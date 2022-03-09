import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container py-3">
            <div>
                <Carousel fade>
                    <Carousel.Item interval={1500} >
                        <img
                            className="d-block w-100"
                            src="/carousel-1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/carousel-2.jpg"

                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/carousel-3.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Home;