// Home.js
import React from 'react';
import backgroundImage from './anh-nen.jpeg';


const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
         style={{ backgroundImage:`url(${backgroundImage})` }}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Mọi thứ cần nghĩ về đều ở trong này</h1>
        <p className="text-lg mb-8">Vì những điều như thế này làm tao vui vẻ!</p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-full text-lg hover:bg-gray-200 focus:outline-none">
          Get Started
        </button>
      </header>

      <section className="flex flex-wrap justify-around mt-12">
        
      </section>
    </div>

  );
};

export default Home;
