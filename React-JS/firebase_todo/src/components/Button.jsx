import React from 'react';

const Button = ({text}) => {
  return (
    <div className="relative group mt-7">
      <div className="relative w-full h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transition-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12" />
        <div className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-2xl inset-0.5 bg-black">
          <button name="text" className="input cursor-pointer font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black" type='submit'>
            {text}
          </button>
        </div>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-linear-to-r from-purple-500 to-white blur-[30px]" />
      </div>
    </div>
  );
}

export default Button;
