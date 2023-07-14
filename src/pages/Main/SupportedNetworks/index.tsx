import React from 'react'

import { ReactComponent as Arbitrum } from '@assets/images/arbitrum-main.svg';
import { ReactComponent as Avalance } from '@assets/images/avalance-main.svg';
import { ReactComponent as Ethereum } from '@assets/images/ethereum-main.svg';
import { ReactComponent as Optimism } from '@assets/images/optimism-main.svg';
import { ReactComponent as Polygon } from '@assets/images/polygon-main.svg';

const SupportedNetworks: React.FC = (props) => {
  return (
    <div className="relative w-full">
      <div className="absolute z-10 bg-blue/50 w-80 h-80 bottom-0 -right-5 translate-y-1/3 rounded-full app-radial hidden md:flex" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full p-[0.625rem] md:py-16 lg:px-0 max-w-app mx-auto">
        {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
        <div className="bg-active rounded-[2rem] md:rounded-[4rem] px-4 py-6 md:p-16 w-full">
          <div className="font-medium text-center text-[1.75rem] leading-[1.2] my-4 md:text-left md:text-[2.5rem] md:leading-normal md:mb-12 md:mt-8 text-black">
            Supported Networks and Partners
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full border border-black/20 rounded-[2rem] flex items-center justify-center min-h-[6.675rem]">
              <Ethereum />
            </div>
            <div className="w-full border border-black/20 rounded-[2rem] flex items-center justify-center min-h-[6.675rem]">
              <Arbitrum />
            </div>
            <div className="w-full border border-black/20 rounded-[2rem] flex items-center justify-center min-h-[6.675rem]">
              <Polygon />
            </div>
            <div className="w-full border border-black/20 rounded-[2rem] flex items-center justify-center min-h-[6.675rem]">
              <Optimism />
            </div>
            <div className="w-full border border-black/20 rounded-[2rem] flex items-center justify-center min-h-[6.675rem]">
              <Avalance />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SupportedNetworks;
