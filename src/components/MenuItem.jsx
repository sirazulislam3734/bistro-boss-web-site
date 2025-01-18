import React from 'react';

const MenuItem = ({item}) => {
    const {name, price, recipe, image} = item;
    return (
        <div>
            <div className='flex gap-5 my-8'>
                <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-28' src={image} alt="" />
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='uppercase text-2xl'>{name}-------</h2>
                        <p className='text-yellow-600'>{price}</p>
                    </div>
                    {recipe}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;