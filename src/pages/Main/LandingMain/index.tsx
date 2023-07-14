import React from 'react'

import { ReactComponent as Arbitrum } from '@assets/images/arbitrum.svg';
import { ReactComponent as Avalance } from '@assets/images/avalance.svg';
import { ReactComponent as Ethereum } from '@assets/images/ethereum.svg';
import { ReactComponent as Optimism } from '@assets/images/optimism.svg';
import { ReactComponent as Polygon } from '@assets/images/polygon.svg';
import { URLS } from '@config/constants';
import NetworksBanner from '@components/NetworksBanner';

const LandingMain: React.FC = (props) => {
  const handleLaunch = () => {
    window.open(URLS.DAPP, '_blank');
  }
  return (
    <div id="landing-main" className="relative w-full pt-16 pb-4">
      <div className="absolute z-10 bg-active/50 w-80 h-80 top-0 -left-7 rounded-full app-radial hidden md:flex" />
      <div className="absolute z-10 bg-radial md:bg-radial/70 w-[17.5rem] h-[17.5rem] md:w-[25rem] md:h-[25rem] top-1/2 left-1/2 rounded-full app-radial -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute z-10 bg-blue/20 w-60 h-60 md:w-80 md:h-80 right-0 -bottom-7 md:-right-7 rounded-full app-radial" />
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] w-full max-w-app mx-auto">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-[3.75rem] items-center">
            <div className="app-slogan px-6 md:px-10 text-center">
              Zero Knowledge Smart Account for Web3
            </div>
            <div className="font-medium text-sm md:text-[1.375rem] leading-[1.2] text-white/80">
              Lightweight , Efficient , Secure , Composable
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4 w-full md:w-auto px-8 md:px-0">
              <a className="btn-primary w-full md:w-auto flex justify-center" target="_blank" href={URLS.GITBOOK}>
                Learn More
              </a>
              <button className="btn-primary btn-primary--active w-full md:w-auto" onClick={handleLaunch}>
                Launch DAPP
              </button>
            </div>
          </div>
        </div>
        <div className="opacity-50 w-full block md:hidden">
          <NetworksBanner />
        </div>
        {/* <Carousel className="opacity-50 w-full block md:hidden" autoplay autoplayInterval={3000} slidesToShow={3} withoutControls wrapAround cellAlign="center">
          <Ethereum className="mx-auto w-auto h-[1.5rem]" />
          <Arbitrum className="mx-auto w-auto h-[1.5rem]" />
          <Polygon className="mx-auto w-auto h-[1.5rem]" />
          <Optimism className="mx-auto w-auto h-[1.5rem]" />
          <Avalance className="mx-auto w-auto h-[1.5rem]" />
        </Carousel> */}
        <div className="hidden md:flex justify-center flex-nowrap items-center w-full md:px-4 lg:px-16 opacity-50 gap-y-3">
          <Ethereum className="mx-auto md:scale-75 lg:scale-100" />
          <Arbitrum className="mx-auto md:scale-75 lg:scale-100" />
          <Polygon className="mx-auto md:scale-75 lg:scale-100" />
          <Optimism className="mx-auto md:scale-75 lg:scale-100" />
          <Avalance className="mx-auto md:scale-75 lg:scale-100" />
        </div>
      </div>
    </div>
  )
};

export default LandingMain;
