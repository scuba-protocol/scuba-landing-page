import React from 'react'

import { ReactComponent as ZkSwapToken1 } from '@assets/icons/zk-swap-token-1.svg';
import { ReactComponent as ZkSwapToken2 } from '@assets/icons/zk-swap-token-2.svg';
import { ReactComponent as ZkSwapToken3 } from '@assets/icons/zk-swap-token-3.svg';
import { ReactComponent as ZkSwapToken4 } from '@assets/icons/zk-swap-token-4.svg';
import { ReactComponent as ZkSwapToken5 } from '@assets/icons/zk-swap-token-5.svg';
import { ReactComponent as ZkLsdToken1 } from '@assets/icons/zk-lsd-token-1.svg';
import { ReactComponent as ZkLsdToken2 } from '@assets/icons/zk-lsd-token-2.svg';
import { ReactComponent as ZkLsdToken3 } from '@assets/icons/zk-lsd-token-3.svg';
import { ReactComponent as ZkLsdToken4 } from '@assets/icons/zk-lsd-token-4.svg';
import { ReactComponent as ZkLsdToken5 } from '@assets/icons/zk-lsd-token-5.svg';

interface ISupply {}

const Supply: React.FC<ISupply> = (props) => {
  return (
    <div className="relative w-full">
      <div className="absolute z-10 bg-active/80 w-80 h-80 -top-1/2 left-1/2 -translate-x-1/2 rounded-full app-radial hidden lg:flex" />
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full max-w-app mx-auto">
        {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
        <div className="flex-1 pt-6 pb-10 lg:py-10 px-8 lg:px-16 flex flex-col items-center gap-y-8 lg:gap-y-16">
          <div className="font-medium text-[1.75rem] leading-[1.2] md:text-[2.5rem] md:leading-normal text-active">zk-Swap</div>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <ZkSwapToken1 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkSwapToken2 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkSwapToken3 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkSwapToken4 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkSwapToken5 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
          </div>
        </div>
        <div className="flex-1 pt-6 pb-10 lg:py-10 px-8 lg:px-16 flex flex-col items-center gap-y-8 lg:gap-y-16">
          <div className="font-medium text-[1.75rem] leading-[1.2] md:text-[2.5rem] md:leading-normal text-active">zk-LSD</div>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <ZkLsdToken1 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkLsdToken2 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkLsdToken3 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkLsdToken4 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
            <ZkLsdToken5 className="w-[3.125rem] h-[3.125rem] md:w-auto md:h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Supply;
