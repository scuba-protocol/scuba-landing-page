import React from 'react'

import { ReactComponent as TreasureLooting } from '@assets/images/treasure-looting.svg';
import { URLS } from '@config/constants';

const JoinEvent: React.FC = (props) => {
  const handleJoinUs = () => {
    window.open(URLS.CAMPAIGN, '_blank');
  }
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center pt-16 md:pb-16 w-full max-w-app mx-auto">
      <div className="flex-1 px-4 md:pl-10 lg:pl-[5.5rem] md:pr-10 py-6 flex flex-col justify-center items-start gap-y-6 md:gap-y-12 md:min-h-[40rem]">
        <div className="font-medium max-w-[24.375rem] md:max-w-none text-[1.75rem] leading-[1.2] md:text-[2.5rem] md:leading-[1.2] text-white">
          Don't Miss Out on the <span className="text-active">Treasure Looting</span> Event
        </div>
        <div className="text-base leading-7 text-white/80">
          Join Scuba Treasure Looting Event to explore Scuba Protocol and Scuba ZK Account. Find hidden riches on an epic adventure. Thrill-seekers and treasure hunters, get ready!
        </div>
        <button className="btn-primary btn-primary--active w-full md:w-auto" onClick={handleJoinUs}>
          Join US
        </button>
      </div>
      <div className="flex-1 text-center relative py-6 md:pr-6 flex items-center justify-center md:min-h-[40rem]">
        <div className="absolute z-10 bg-radial/90 w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full app-radial hidden md:flex" />
        <TreasureLooting className="w-full relative z-20 " />
      </div>
    </div>
  )
};

export default JoinEvent;
