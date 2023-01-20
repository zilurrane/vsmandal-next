import React, { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

export default function ControlledCarousel({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.id}>
        {item.comp}
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  function goToSlide(isPrev) {
    setActiveIndex((prev) => {
      const nextSlide = prev + 1;
      const prevSlide = prev - 1;

      if (isPrev && prevSlide < 0) return 0;
      if (isPrev) return prevSlide;
      if (nextSlide === items.length) return 0;
      return nextSlide;
    });
  }
  return (
    <Carousel
      activeIndex={activeIndex}
      next={() => goToSlide()}
      previous={() => goToSlide(true)}
      interval={null}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={(index) => setActiveIndex(index)}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={() => goToSlide(true)}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={() => goToSlide()}
      />
    </Carousel>
  );
}
