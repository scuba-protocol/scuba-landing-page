import React from 'react'

import { ReactComponent as WhyScuba1 } from '@assets/images/why-scuba-1.svg';
import { ReactComponent as WhyScuba2 } from '@assets/images/why-scuba-2.svg';
import { ReactComponent as WhyScuba3 } from '@assets/images/why-scuba-3.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right.svg';
import { URLS } from '@config/constants';


const reasons = [
  {
    icon: <WhyScuba1 />,
    description: 'Plug N Play',
    id: 'plug_and_play',
  },
  {
    icon: <WhyScuba2 />,
    description: 'One-Stop Solution',
    id: 'one_stop',
  },
  {
    icon: <WhyScuba3 />,
    description: 'Low Cost',
    id: 'low_cost',
  },
];

const WhyScuba: React.FC = (props) => {
  const handleClick = () => {
    window.open(URLS.HOW_IT_WORKS_FEATURES, '_blank');
  }
  return (
    <div className="relative w-full">
      <div className="absolute z-10 bg-active/60 w-80 h-80 top-24 right-5 rounded-full app-radial hidden lg:flex" />
      <div className="absolute z-10 bg-active/30 w-80 h-80 -left-5 bottom-5 rounded-full app-radial hidden lg:flex" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full py-16">
        {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
        <div className="lg:py-10 text-active font-medium text-[1.75rem] leading-[1.2] lg:text-[2.5rem] lg:leading-normal">
          Why Choose Scuba
        </div>
        <div className="flex-1 flex flex-col lg:flex-row justify-center items-center w-full gap-x-6">
          {reasons.map(reason => (
            <label htmlFor={reason.id} key={reason.id} className="flex-1 max-w-sm cursor-pointer py-8 lg:py-16 px-0 flex flex-col justify-center items-center gap-4 lg:hover:bg-header rounded-[2rem] border border-white/0 lg:hover:border-white/10 transition-all">
              {reason.icon}
              <div className="text-[1.375rem] md:text-[1.75rem] leading-[1.2] font-medium text-white text-center">
                {reason.description}
              </div>
              <button className="btn-secondary mt-4 flex justify-center" onClick={handleClick} id={reason.id}>
                <ArrowRight />
              </button>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
};

export default WhyScuba;
