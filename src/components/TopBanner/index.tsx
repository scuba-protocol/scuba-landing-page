import React from 'react'
import { useRecoilState } from 'recoil';
import cx from 'classnames';

import TopBannerState from '@stores/topBannerState';
import { ReactComponent as BannerClose } from '@assets/icons/banner-close.svg';
import { ReactComponent as BannerLogo } from '@assets/icons/banner-logo.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right.svg';
import { URLS } from '@config/constants';

const TopBanner: React.FC = () => {
  const [topBanner, setTopBanner] = useRecoilState(TopBannerState);
  const handleGo = () => {
    window.open(URLS.BANNER, '_blank');
  }
  return (
    <div className="relative overflow-hidden">
      <div
        className={cx(
          'bg-active p-4 grid grid-cols-[1fr] grid-rows-[1.5rem_1fr] md:grid-rows-1 md:grid-cols-[2rem_1fr_2rem] gap-4 items-center w-full text-black shadow-[0_0_1.5rem_0_rgba(30,224,189,0.25)] transition-all duration-700 ease-in-out',
          {
            '-mt-[100%] opacity-0': !topBanner.open
          }
        )}
      >
        <div className="flex-wrap col-start-1 row-start-2 md:flex-nowrap md:col-start-2 md:row-start-auto col-span-1 flex gap-4 items-center justify-center">
          <BannerLogo className="w-11 h-11" />
          <div className="text-xs leading-normal font-normal md:text-base md:leading-none md:font-medium flex-1">
            TREASURE HUNTERS! Scuba <span className="font-semibold">Treasure Looting</span> Pub-testing is <span className="font-semibold">LIVE NOW!</span> Collect points! Win airdrops and More! 
          </div>
          <button
            className="btn-black w-full md:w-auto inline-flex items-center justify-center px-6 py-[0.625rem] text-active"
            onClick={handleGo}
          >
            Go<ArrowRight className="w-5 h-5 ml-1" />
          </button>
        </div>
        <div className="flex justify-end items-center">
          <BannerClose className="cursor-pointer" onClick={() => setTopBanner({ open: false })} />
        </div>
      </div>
    </div>
  )
};

export default TopBanner;
