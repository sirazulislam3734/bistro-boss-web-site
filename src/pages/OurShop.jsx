import React, { useState } from "react";
import shopImg from "../assets/shop/banner2.jpg";
import Cover from "../components/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import OrderCard from "../components/OrderCard";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const pizza = menu?.filter((item) => item.category === "pizza");
  return (
    <div>
      {/* Shop */}
      <Cover
        img={shopImg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={`text-center my-16`}>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {
            salad.map((item) => (<OrderCard key={item._id} item={item} />))
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {
            pizza.map((item) => (<OrderCard key={item._id} item={item} />))
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {
            soup.map((item) => (<OrderCard key={item._id} item={item} />))
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {
            dessert.map((item) => (<OrderCard key={item._id} item={item} />))
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {
            drinks.map((item) => (<OrderCard key={item._id} item={item} />))
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
