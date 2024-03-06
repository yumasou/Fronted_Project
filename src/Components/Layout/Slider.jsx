import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Loading from "./Loading";

function Slider({ list }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mx-10 my-10">
      {list.length > 0 ? (
        <Carousel
          swipeable={false}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container rounded"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="mx-3 rounded shadow-lg"
        >
          {list.map((m) => (
            <Card
              key={m.id}
              id={m.id}
              title={m.title}
              image={m.thumbnail}
              description={m.description}
              price={m.price}
              discount={m.discountPercentage}
              stock={m.stock}
            />
          ))}
        </Carousel>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Slider;
