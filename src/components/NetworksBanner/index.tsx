import React from 'react'

import { ReactComponent as Arbitrum } from '@assets/images/arbitrum.svg';
import { ReactComponent as Avalance } from '@assets/images/avalance.svg';
import { ReactComponent as Ethereum } from '@assets/images/ethereum.svg';
import { ReactComponent as Optimism } from '@assets/images/optimism.svg';
import { ReactComponent as Polygon } from '@assets/images/polygon.svg';

import modules from './index.module.scss';

const NetworksBanner: React.FC = () => {
  return (
    <div className={modules.networksBanner}>
      <div className={modules.networksBannerWrapper}>
        <div className={modules.networksBannerSection} >
          <Ethereum className="w-auto h-[1.625rem]" />
          <Arbitrum className="w-auto h-[1.625rem]" />
          <Polygon className="w-auto h-[1.625rem]" />
          <Optimism className="w-auto h-[1.625rem]" />
          <Avalance className="w-auto h-[1.625rem]" />
        </div>
        <div className={modules.networksBannerSection} >
          <Ethereum className="w-auto h-[1.625rem]" />
          <Arbitrum className="w-auto h-[1.625rem]" />
          <Polygon className="w-auto h-[1.625rem]" />
          <Optimism className="w-auto h-[1.625rem]" />
          <Avalance className="w-auto h-[1.625rem]" />
        </div>
        <div className={modules.networksBannerSection} >
          <Ethereum className="w-auto h-[1.625rem]" />
          <Arbitrum className="w-auto h-[1.625rem]" />
          <Polygon className="w-auto h-[1.625rem]" />
          <Optimism className="w-auto h-[1.625rem]" />
          <Avalance className="w-auto h-[1.625rem]" />
        </div>
      </div>
    </div>
  )
};

export default NetworksBanner;
