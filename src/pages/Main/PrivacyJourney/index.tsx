import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { ReactComponent as PrivacyJourney1 } from '@assets/images/privacy-journey-1.svg';
import { ReactComponent as PrivacyJourney2 } from '@assets/images/privacy-journey-2.svg';
import { ReactComponent as PrivacyJourney3 } from '@assets/images/privacy-journey-3.svg';
import JourneyCarousel from '@components/JourneyCarousel';

const journeys = [
  {
    icon: <PrivacyJourney1 className="max-w-full lg:w-full mx-auto" />,
    title: 'zk-RoundTrip',
    desc: (<span>Single-chain private transactions can be performed by users through the zk-RoundTrip feature, facilitating concealed asset transfers between parties' addresses on one chain. The system offers two modes: expert, which bolsters privacy via specified discrete amounts and random delays, and normal, for straightforward use.</span>)
  },
  {
    icon: <PrivacyJourney2 className="max-w-full lg:w-full mx-auto" />,
    title: 'zk-Asset & zk-Account',
    desc: (
      <span>
        A unified multi-chain zk smart account. Users can easily convert ERC assets into zkAssets.
        <br />
        <br />
        zkAssets can be used at any time whether it's for transfers, swaps, or participating in Dapps to earn rewards.
      </span>
    )
  },
  {
    icon: <PrivacyJourney3 className="max-w-full lg:w-full mx-auto" />,
    title: 'Compliance Tool for Private Transactions',
    desc: (<span>Scuba Protocol emphasizes user rights and compliance, employing features like KYC attribute-based SBTs for transaction amount limitations and ZKP for permissioned viewing keys and traceability, thereby ensuring secure and compliant usage of assets.</span>)
  }
];

const PrivacyJourney: React.FC = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full pb-20 max-w-app mx-auto">
      {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
      <div className="py-10 px-4 lg:px-0 text-active font-medium text-[1.75rem] leading-[1.2] lg:text-[2.5rem] lg:leading-normal w-full">
        <div>Dive into Your</div>
        <div>Privacy Journey with Scuba</div>
      </div>
      {
        isDesktopOrLaptop ? (
          <div className="flex-1 justify-center w-full gap-6 px-4 hidden lg:flex">
            {journeys.map(journey => (
              <div key={journey.title} className="flex-1 bg-header border border-white/[.15] px-4 pt-8 pb-12 lg:px-8 rounded-[2rem]">
                {journey.icon}
                <div className="text-lg font-medium leading-[1.2] flex items-center justify-center text-center h-16">
                  {journey.title}
                </div>
                <div className="text-sm leading-normal text-white/80">
                  {journey.desc}
                </div>
              </div>
            ))}
          </div>
        ) :
        <JourneyCarousel journeys={journeys} />
      }
    </div>
  )
};

export default PrivacyJourney;
