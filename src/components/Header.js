import React from "react";

const Header = () => {
  return (
    <div className=' py-8 ' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <span className='mb-0'>YHUJAE</span>
            <hr className='my-0 bg-warning h-0.5 w-[90px]' />
            <span className='my-0 text-secondary'>DEV</span>
          </a>
          <button className='btn btn-sm '>Work with me </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
