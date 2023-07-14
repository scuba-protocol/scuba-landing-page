import React from 'react'

import { ReactComponent as USDT } from '@assets/icons/USDT.svg';
import { ReactComponent as USDC } from '@assets/icons/USDC.svg';
import { ReactComponent as DAI } from '@assets/icons/DAI.svg';
import { ReactComponent as WETH } from '@assets/icons/WETH.svg';
import { ReactComponent as WBTC } from '@assets/icons/WBTC.svg';

const tokens = [
  {
    symbol: 'USDT',
    name: 'Tether',
    icon: <USDT />,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    icon: <USDC />,
  },
  {
    symbol: 'DAI',
    name: 'Dai',
    icon: <DAI />,
  },
  {
    symbol: 'WETH',
    name: 'Wrapped ETH',
    icon: <WETH />,
  },
  {
    symbol: 'WBNB',
    name: 'Wrapped Bitcoin',
    icon: <WBTC />,
  }
];

const SupportedTokens: React.FC = (props) => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center px-4 py-16 w-full">
      {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
      <div className="max-w-app mx-auto w-full">
        <div className="font-medium text-center text-[1.75rem] leading-[1.2] mb-6 md:text-left md:text-[2.5rem] md:leading-normal md:mb-10 mt-8 text-active">
          Supported Tokens
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-12">
          {tokens.map(token => (
            <div key={token.symbol} className="w-full border border-white/20 rounded-[2rem] flex items-center justify-start min-h-[6.675rem] py-6 px-8 gap-x-4">
              {token.icon}
              <div className="flex flex-col gap-2 text-white leading-[1.2] font-medium">
                <span className="text-lg">{token.name}</span>
                <span className="text-base opacity-60">{token.symbol}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default SupportedTokens;
