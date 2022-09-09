import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./ScreenDimensions.json";
function Swipe(props) {
  const [SlidesNum, set_SlidesNum] = React.useState(1);
  const { Mobile, Tablet, Desktop, superLargeDesktop, superSmallMobile } =
    data.ScreenDimensions;
  React.useLayoutEffect(() => {
    function updateSize() {
      const win_width = window.innerWidth;
      if (win_width < superSmallMobile.maxWidth) set_SlidesNum(1);
      else if (win_width < Mobile.maxWidth) set_SlidesNum(2);
      else if (win_width < Tablet.maxWidth) set_SlidesNum(3);
      else if (win_width < Desktop.maxWidth) set_SlidesNum(4);
      else set_SlidesNum(5);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [Mobile, Tablet, Desktop, superLargeDesktop, superSmallMobile]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        max: superLargeDesktop.maxWidth,
        min: superLargeDesktop.minWidth,
      },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: {
        max: Desktop.maxWidth,
        min: Desktop.minWidth,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: Mobile.maxWidth,
        min: Mobile.minWidth,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: Tablet.maxWidth,
        min: Tablet.minWidth,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    superSmallMobile: {
      breakpoint: {
        max: superSmallMobile.maxWidth,
        min: superSmallMobile.minWidth,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="carousel-contain">
      <Carousel
        responsive={responsive}
        containerClass="container"
        slidesToSlide={SlidesNum}
        focusOnSelect={true}
        rewind={true}
        rewindWithAnimation={true}
        partialVisible={false}
        itemClass="course-item"
        keyBoardControl={true}
      >
        {props.courses}
      </Carousel>
    </div>
  );
}
export default Swipe;
