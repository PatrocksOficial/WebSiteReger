import React, { Component } from "react";
import './Home.css';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import imagem1 from '../../Images_Icons/image-1.png';
import imagem2 from '../../Images_Icons/image-2.png';
import imagem3 from '../../Images_Icons/image-3.png';
import imagem4 from '../../Images_Icons/image-4.png';

class Home extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
        current: 0
        };
    }
  
    back() {
        this.slideRef.current.goBack();
    }
  
    next() {
        this.slideRef.current.goNext();
    }
  
    render() {
        const properties = {
            duration: 3000,
            autoplay: true,
            transitionDuration: 500,
            arrows: true,
            infinite: true,
            easing: "ease",
            indicators: (i) => <div className="indicator">{i + 1}</div>
        };

    const slideImages = [
        imagem1,
        imagem2,
        imagem3,
        imagem4
    ];

        return (
            <div className="Principal">
                <div className="Home">
                    <div className="slide-container">
                    <Slide ref={this.slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                            <img src={each} alt="Imagem"/>
                        </div>
                        ))}
                    </Slide>
                    </div>
                </div>
            </div>

        )
}
}

export default Home;