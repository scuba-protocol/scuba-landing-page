import React from 'react'

import { ReactComponent as LogoLarge } from '@assets/images/logo-large.svg';

interface IWhatIsScuba {}

const WhatIsScuba: React.FC<IWhatIsScuba> = (props) => {
  return (
    <div className="relative w-full">
      <div className="absolute z-10 bg-active/80 w-60 h-60 lg:w-80 lg:h-80 -left-1/2 -bottom-12 lg:-left-7 rounded-full app-radial" />
      <div className="relative z-20 flex flex-col items-center justify-center py-8 px-4 lg:p-0 min-h-screen w-full max-w-app mx-auto">
        {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <LogoLarge className="mb-6 w-24 h-24 md:w-auto md:h-auto md:mb-[2.5rem]" />
            <div className="text-active text-[1.75rem] mb-6 leading-[1.2] font-medium md:text-[2.5rem] md:mb-[1.25rem]">
              What is Scuba
            </div>
            <div className="text-white/80 text-base md:text-lg leading-[1.75] md:max-w-[48rem] md:px-5 text-center">
              Scuba Protocol is a zero-knowledge Smart Account Layer built on a novel Optimistic Rollup for ZKP operations that enables users to take advantage of all ZKP enhanced asset operations and applications safely and effectively.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WhatIsScuba;
