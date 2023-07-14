import React from 'react'

import { ReactComponent as FrameworkImage } from '@assets/images/framework-1.svg';
import { URLS } from '@config/constants';

const Framework: React.FC = (props) => {
  return (
    <div className="relative w-full">
      <div className="absolute z-10 bg-active/30 w-80 h-80 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full app-radial hidden lg:flex" />
      <div className="relative flex items-center justify-center w-full py-16 px-4 lg:px-0 max-w-app mx-auto">
        {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
        <div className="flex flex-col lg:flex-row bg-back/20 border border-white/10 py-6 rounded-[2rem]">
          <div className="flex-1 p-6 flex items-center justify-center">
            <FrameworkImage className="w-60 h-auto lg:w-auto lg:h-full" />
          </div>
          <div className="flex-1 px-4 py-6 gap-y-8 lg:p-6 flex flex-col justify-center lg:gap-y-12">
            <div className="text-active font-medium text-[1.75rem] leading-[1.2] lg:text-[2.5rem] lg:leading-normal">
              OP-ZKP Framework
            </div>
            <div className="text-white/80 text-sm leading-normal lg:text-base lg:leading-7 ">
              One of the core strengths of the Scuba Protocol lies in its stunning scalability - achieved through utilization of the Optimistic-Rollup part of the Scuba OP-ZKP Framework.
              <br />
              <br />
              Scuba's Rust cryptography library processes complex ZKP generation in sub-second, featuring MegaPlonk - ten times faster than standard Plonk - and super efficient custom circuit gates.
            </div>
            <div>
              <a className="btn-primary btn-primary--active w-full lg:w-auto inline-flex justify-center" href={URLS.HOW_IT_WORKS} target="_blank">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Framework;
