import React from "react";
import Cover from "../components/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import useMenu from "../hooks/useMenu";
import SectionTItle from "../components/SectionTItle";
import MenuCategory from "../components/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  const pizza = menu?.filter((item) => item.category === "pizza");
  return (
    <div>
       {/* main */}
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>

      {/* offered */}
      <SectionTItle
        subTitle="---------Don't miss---------"
        heading="TODAY'S OFFER"
      ></SectionTItle>
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert */}
      <Cover
        img={dessertImg}
        title={"DESSERT"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <MenuCategory items={dessert}></MenuCategory>

      {/* Pizza */}
      <Cover
        img={pizzaImg}
        title={"PIZZA"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <MenuCategory items={pizza}></MenuCategory>

      {/* Salad */}
      <Cover
        img={saladImg}
        title={"SALAD"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <MenuCategory items={salad}></MenuCategory>

      {/* soup */}
      <Cover
        img={soupImg}
        title={"SOUP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
};

export default OurMenu;
