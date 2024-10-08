import React from 'react';

export default function ImKendall() {
  return (
    <div id="#home-section" className="bg-[#1C1C20] flex flex-col justify-center items-center pt-14 pb-14">
      <div className='py-10 text-center'>
        <h2 className="text-gradient font-bold text-3xl md:text-5xl lg:text-6xl leading-normal md:leading-relaxed lg:leading-relaxed">
          I´m Kendall Vargas
        </h2>
        <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-tight lg:leading-tight mt-2">
          Software Developer
        </h1>

        <p className="text-[#8E94BC] pt-6 text-lg">
          {`My mindset is “I can do it.”`}
        </p>


      </div>

      <div className="pt-8 pb-10 text-center">
        <a href="/Docs/CV_KendallVargasRamírez.pdf" target="_blank" className="bg-[#622FF1] text-white py-3 ps-16 pe-16 px-4 rounded-xl text-base hover:bg-[#9663ef] transition duration-300">
          Download CV
        </a>
      </div>
      <div className="text-center">
        <a href="https://www.linkedin.com/in/kendall-vargas-ram%C3%ADrez-146a48249/" target="_blank" className="text-[#8E94BC] text-base hover:text-white transition duration-300">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
