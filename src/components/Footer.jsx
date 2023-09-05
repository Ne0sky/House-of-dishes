import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col items-center justify-between'>
        <div>HOUSE OF DISHES</div>
        <div className='text-gray-500'>
            <p>Priacy Policy | Cookie Policy | Terms</p>
        </div>
        </div>

        <div className='flex flex-col justify-between'>
        <div className='grid grid-cols-2 md:grid-cols-4 place-content-center gap-12 md:gap-16 lg:gap-24 p-8'>

        <div className="flex flex-col space-y-6">
          <a href="#" className="">About Us</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Blog</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Contact</a>
        </div>
        <div className="flex flex-col space-y-6">
          <p  className="">Product</p>
          <a href="#" className="text-gray-500 hover:text-gray-200">Pricing</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">FAQ</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Become Helper</a>
        </div>
        <div className="flex flex-col space-y-6">
          <p  className="">Follow Us</p>
          <a href="#" className="text-gray-500 hover:text-gray-200">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Services</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Contact</a>
        </div>
        <div className="flex flex-col space-y-6">
          <p  className="">Support</p>
          <a href="#" className="text-gray-500 hover:text-gray-200">Help Center</a>
          
        </div>

        </div>
        <p className='pt-8 text-right text-gray-500'>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;