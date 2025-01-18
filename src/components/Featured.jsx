import React from "react";
import SectionTItle from "./SectionTItle";
import Img from "../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div>
      <SectionTItle
        subTitle="------Check it out------"
        heading="FEATURED"
      ></SectionTItle>
      <div className="flex justify-center items-center gap-10 py-10 px-10">
        <div>
          <img src={Img} alt="" />
        </div>
        <div className="space-y-5">
          <p>March 20, 2023</p>
          <p> WHERE CAN I GET SOME? </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-black bg-slate-100 border-b-4 px-4 py-3 rounded-xl hover:bg-black hover:text-white">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
