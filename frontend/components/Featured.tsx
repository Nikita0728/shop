import React from 'react';
import Image from 'next/image';
import dressA from '../assets/dressA.png';
import dressB from '../assets/dressB.png';

const dresses = [
  { img: dressA, name: "Strapless Dress", price: 6000 },
  { img: dressB, name: "Floral Dress", price: 4500 },
 
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <p className='md:text-4xl text-2xl mt-10 mb-10 font-bold text-[#A3466E] text-center'>
         Featured Products
      </p>
      
      {/* Equal-height grid container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {dresses.map((dress, index) => (
          <div 
            key={index} 
            className='flex flex-col h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white'
          >
            {/* Image container with exact same height */}
            <div className='relative aspect-square bg-gray-100'> {/* 1:1 ratio */}
              <Image 
                src={dress.img} 
                alt={dress.name}
                fill
                className='object-contain p-4'
                style={{
                  mixBlendMode: dress.img.src.endsWith('.png') ? 'multiply' : 'normal',
                }}
              />
            </div>
            
            {/* Description with fixed height */}
            <div className='p-4 border-t h-24 flex flex-col justify-center text-center'>
              <p className='font-medium text-gray-800 line-clamp-1'>{dress.name}</p>
              <p className='text-[#A3466E] font-semibold'>Npr. {dress.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts