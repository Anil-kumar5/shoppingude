import React from 'react'
import './Carousel.css';
function Carousel() {
    return (
        <div className="carousel">
            <button className="carousel_button carousel_button-left ">left</button>
            <div className="carousel-track-container">
                <ul className="carousel-track">
                    <li className="carousel-slide">
                    <img className="carousel-images" src="./pic1.jpg" alt = ""/>
                    </li>
                    <li className="carousel-slide">
                    <img className="carousel-images" src="./pic2.jpg" alt = ""/>
                    </li>
                    <li className="carousel-slide">
                    <img className="carousel-images" src="./pic3.jpg" alt = ""/>
                    </li>
                </ul>
            </div>
            <button className="carousel_button carousel_button-right">right</button>
        </div>
    )
}

export default Carousel
