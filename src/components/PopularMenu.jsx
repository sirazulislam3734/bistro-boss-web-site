import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionTItle from "./SectionTItle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {

  const [menu] = useMenu();
  const popularMenu = menu?.filter((item) => item.category === "popular");
  // const [popularMenu, setPopularMenu] = useState([]);
  // useEffect(() => {
  //   axios.get("menu.json").then((res) => {
  //     const data = res?.data?.filter((item) => item.category === "popular");
  //     setPopularMenu(data);
  //   });
  // }, []);
  
  return (
    <div className="my-10">
      <SectionTItle
        subTitle="------Check it out------"
        heading="FROM OUR MENU"
      ></SectionTItle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} 
          item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
