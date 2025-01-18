import React from 'react';

const SectionTItle = ({ heading, subTitle}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-16'>
            <p className='text-yellow-600 my-4'>{subTitle}</p>
            
            <h3 className='text-4xl border-y-4 uppercase py-6'>{heading}</h3>
            
        </div>
    );
};

export default SectionTItle;