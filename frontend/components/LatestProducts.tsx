'use client';
import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart } from 'lucide-react'; // using lucide-react icons
import dress1 from '../assets/dress1.png';
import dress2 from '../assets/dress2.png';
import dress3 from '../assets/dress3.png';
import dress4 from '../assets/dress4.png';

const dresses = [
  { img: dress1, name: "Strapless Dress", price: 3000 },
  { img: dress2, name: "Floral Dress", price: 3500 },
  { img: dress3, name: "Evening Gown", price: 4000 },
  { img: dress4, name: "Casual Dress", price: 2500 },
];

const LatestProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <p className='md:text-4xl text-2xl mt-10 mb-10 font-bold text-[#A3466E] text-center'>
        Latest Products
      </p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {dresses.map((dress, index) => (
          <div 
            key={index} 
            className='flex flex-col h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white'
          >
            {/* Image */}
            <div className='relative aspect-square bg-gray-100'>
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
            
            {/* Description */}
            <div className='p-4 border-t flex flex-col justify-center text-center'>
              <p className='font-medium text-gray-800 line-clamp-1'>{dress.name}</p>
              <p className='text-[#A3466E] font-semibold mb-2'>Npr. {dress.price}</p>
              
              {/* Action buttons */}
              <div className='flex items-center justify-center gap-4 mt-auto'>
                <button 
                  className='p-2 rounded-full hover:bg-gray-100 transition'
                  onClick={() => console.log(`Add to cart: ${dress.name}`)}
                >
                  <ShoppingCart className="w-5 h-5 text-[#A3466E]" />
                </button>
                <button 
                  className='p-2 rounded-full hover:bg-gray-100 transition'
                  onClick={() => console.log(`Add to favorites: ${dress.name}`)}
                >
                  <Heart className="w-5 h-5 text-[#A3466E]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
