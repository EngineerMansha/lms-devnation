import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
//
// import "slick-carousel/slick/slick-theme.css";
import "./Portfolio.css"
import PortfolioCard from './PortfolioCards/PortfolioCard'
import { PortfolioData } from './PortfolioCardsData'
import PortfolioDropDown from './portfolioDropDown/PortfolioDropDown'

const Portfolio = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
      > <button ><i class="fa-solid fa-angle-left"></i></button></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "-50px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "center",
    centerMode: true,

  };


  return (
    <div className='portfolio-main'>
      <div className="heading-wrapper">
        <p>Porfolio</p>
        <div className="icons">
          {/* + icon  */}
          <PortfolioDropDown />

          {/* + icon drop down  */}
          {/* pen icon  */}
          <i class="fa-solid fa-pen"></i>
        </div>
      </div>
      {/* portfolio cards  */}


      <div className="Portfolio-card-Main-wrapper" >
        <Slider {...settings}>
          {PortfolioData.map((data) => {
            return (
              <PortfolioCard
                image={data.img}
                heading={data.heading}
                info={data.info}
                />
            )
          })}
        </Slider>
      </div>
      
    </div>
  )
}

export default Portfolio