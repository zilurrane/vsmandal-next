import React, { useState } from "react";
import {
  // Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./controlledCarousel.module.scss";

export default function ControlledCarousel({
  items = [],
  variant = "light",
}) {
  const theme = variant === "dark" ? "dark" : "";
  const arrowColor = variant === "dark" ? "#000" : '#fff'

  return (
    <Carousel
      interval={5000}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      renderArrowPrev={(onClickHandler) => {
        return (
          <span
            className={`${styles["arrow-container"]} ${styles[theme]}`}
            onClick={onClickHandler}
          >
            <i class="ti-angle-left" style={{ color: arrowColor }}></i>
          </span>
        );
      }}
      renderArrowNext={(onClickHandler) => {
        return (
          <span
            className={`${styles["arrow-container"]} ${styles[theme]} ${styles["arrow-next"]}`}
            onClick={onClickHandler}
          >
            <i class="ti-angle-right" style={{ color: arrowColor }}></i>
          </span>
        );
      }}
    >
      {items.map((item) => {
        return <div>{item?.comp}</div>;
      })}
    </Carousel>
  );
}

// export default function ControlledCarousel({ items = [] }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem key={item.id}>
//         {item.comp}
//         <CarouselCaption
//           captionText={item?.caption?.text}
//           captionHeader={item?.caption?.title}
//         />
//       </CarouselItem>
//     );
//   });

//   function goToSlide(isPrev) {
//     setActiveIndex((prev) => {
//       const nextSlide = prev + 1;
//       const prevSlide = prev - 1;

//       if (isPrev && prevSlide < 0) return 0;
//       if (isPrev) return prevSlide;
//       if (nextSlide === items.length) return 0;
//       return nextSlide;
//     });
//   }

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={() => goToSlide()}
//       previous={() => goToSlide(true)}
//       interval={null}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={(index) => setActiveIndex(index)}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={() => goToSlide(true)}
//         className={`${styles['arrow']}`}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={() => goToSlide()}
//       />
//     </Carousel>
//   );
// }
