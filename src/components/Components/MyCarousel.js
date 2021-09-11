import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./carousel.css";
//https://reactjsexample.com/react-component-that-renders-a-media-gallery-slider-carousel/
function MyCarousel() {
  const img1 =
    "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg";
  const img2 =
    "https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png";
  const img3 =
    "https://st2.depositphotos.com/3759967/5593/i/600/depositphotos_55936567-stock-photo-swirling-frosty-multi-colored-fractal.jpg";

  return (
    <div className="carouselParent">
      <AwesomeSlider>
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AwesomeSlider>
    </div>
  );
}

export default MyCarousel;
