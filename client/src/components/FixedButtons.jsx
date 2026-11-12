import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const FixedButtons = () => {
  return (
    // 'bottom-10' se ye screen ke bottom se thoda upar rahenge
    // 'gap-3' se dono buttons ke beech space rahega
    <div className="fixed right-0 bottom-20 z-[100] flex flex-col gap-3 shadow-2xl">
      
      {/* === RELATED BUTTON === */}
      <button className="group flex items-center justify-center bg-[#F21651] hover:bg-[#d11044] transition-colors text-white h-14 w-[110px] md:w-[130px] cursor-pointer rounded-l-md">
        <div className="flex items-center gap-2 px-2 md:px-4">
          {/* Icon with circle outline */}
          <div className="border-2 border-white rounded-full p-[2px] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-[11px] md:text-xs font-semibold tracking-widest uppercase">Related</span>
        </div>
      </button>

      {/* === BUY NOW BUTTON === */}
      <button className="group flex items-center justify-center bg-white hover:bg-gray-100 transition-colors text-[#1a1a1a] h-14 w-[110px] md:w-[130px] border border-gray-200 cursor-pointer rounded-l-md">
        <div className="flex items-center gap-2 px-2 md:px-4">
          <FaShoppingCart className="text-[#F21651] text-sm md:text-base" />
          <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase">Buy Now</span>
        </div>
      </button>

    </div>
  );
};

export default FixedButtons;