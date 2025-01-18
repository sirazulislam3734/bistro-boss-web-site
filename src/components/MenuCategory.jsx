import React from 'react';
import { Link } from "react-router-dom";
import MenuItem from './MenuItem';

const MenuCategory = ({items}) => {
    return (
        <div className='container mx-auto my-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} 
          item={item}></MenuItem>
        ))}
      </div>
      <Link to="/ourShop" className="text-center block my-10 text-2xl text-black">
      <button className="border-black mx-auto bg-slate-100 border-b-4 px-4 py-3 rounded-xl hover:bg-black hover:text-white">ORDER YOUR FAVOURITE FOOD</button>
      </Link>
        </div>
    );
};

export default MenuCategory;