import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'

import { ReactComponent as CarouselRight } from '@assets/icons/carousel-right.svg';
import { ReactComponent as CarouselLeft } from '@assets/icons/carousel-left.svg';

import modules from './index.module.scss';

type JourneyType = {
  title: string;
  desc: JSX.Element;
  icon: JSX.Element;
}

interface IJourneyCarousel {
  journeys: JourneyType[];
}

const JourneyCarousel: React.FC<IJourneyCarousel> = ({ journeys }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const handlePosition = () => {
    const element = document.querySelector<HTMLDivElement>(`.${modules.journeyCarouselItem}:nth-of-type(${currentIdx + 1})`);
    const root = document.querySelector<HTMLDivElement>(`.${modules.journeyCarouselWrapper}`);
    root?.scrollTo({
      behavior: 'smooth',
      left: element?.offsetLeft,
    })
  }

  useEffect(() => {
    handlePosition();
  }, [currentIdx]);
  return (
    <div className={modules.journeyCarousel}>
      <div className={modules.journeyCarouselWrapper}>
        <div className={modules.journeyCarouselContainer}>
          {journeys.map(journey => (
            <div key={journey.title} className={cx(modules.journeyCarouselItem)}>
              <div className="bg-header border border-white/[.15] px-4 pt-8 pb-12 lg:px-8 rounded-[2rem] h-full">
                {journey.icon}
                <div className="text-lg font-medium leading-[1.2] flex items-center justify-center text-center h-16">
                  {journey.title}
                </div>
                <div className="text-sm leading-normal text-white/80">
                  {journey.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CarouselLeft
          className={cx(
            'cursor-pointer',
            {
            'pointer-events-none opacity-20': currentIdx === 0,
            }
          )}
          onClick={() => setCurrentIdx(currentIdx - 1)}
        />
        <div className="flex items-center justify-center gap-x-1 mx-3">
          {journeys.map((journey, idx) => (
            <div
              key={journey.title}
              className={cx(
                'h-1 w-4 rounded-lg',
                {
                  'bg-active pointer-events-none': currentIdx === idx,
                  'bg-active/20 cursor-pointer': currentIdx !== idx,
                }
              )}
              onClick={() => setCurrentIdx(idx)}
            />
          ))}
        </div>
        <CarouselRight
          className={cx(
            'cursor-pointer',
            {
              'pointer-events-none opacity-20': currentIdx === journeys.length - 1,
            }
          )}
          onClick={() => setCurrentIdx(currentIdx + 1)}
        />
      </div>
    </div>
  )
};

export default JourneyCarousel;
