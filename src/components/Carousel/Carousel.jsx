import { useRef, useEffect, useId } from "react";
import Card from "./Card/Card";
import styles from "./Carousel.module.scss";

export const cards = [
  {
    id: 1,
    image: "/images/fruit-salad.png",
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 2,
    image: "/images/beef.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    type: "Western",
  },
  {
    id: 3,
    image: "/images/japanese.png",
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    type: "Healthy",
  },
  {
    id: 4,
    image: "/images/taco.png",
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    type: "Eastern",
  },
];

export default function Carousel() {
  const carouselRef = useRef(null);

  function handleScrollRight() {
    carouselRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
    console.log("scrolled");
  }

  function handleScrollLeft() {
    carouselRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
    console.log("scrolled");
    console.log(cards);
  }

  return (
    <div ref={carouselRef} className={styles["carousel"]}>
      <button
        type="button"
        onClick={handleScrollLeft}
        className={styles["carousel__scrollButton--left"]}
      ></button>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
      <button
        type="button"
        onClick={handleScrollRight}
        className={styles["carousel__scrollButton--right"]}
      ></button>
    </div>
  );
}
