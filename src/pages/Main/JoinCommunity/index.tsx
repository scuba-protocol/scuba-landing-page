import React from 'react'

import { ReactComponent as Twitter } from '@assets/images/twitter.svg';
import { ReactComponent as Telegram } from '@assets/images/telegram.svg';
import { ReactComponent as Discord } from '@assets/images/discord.svg';
import { ReactComponent as Medium } from '@assets/images/medium.svg';
import { ReactComponent as Github } from '@assets/images/github.svg';
import { COMMUNITY } from '@config/constants';

const mediaList = [
  {
    name: 'Twitter',
    link: COMMUNITY.TWITTER,
    icon: <Twitter className="md:w-full" />
  },
  {
    name: 'Telegram',
    link: '',
    icon: <Telegram className="md:w-full" />
  },
  {
    name: 'Discord',
    link: COMMUNITY.DISCORD,
    icon: <Discord className="md:w-full" />
  },
  {
    name: 'Medium',
    link: COMMUNITY.MEDIUM,
    icon: <Medium className="md:w-full" />
  },
  {
    name: 'Github',
    link: COMMUNITY.GITHUB,
    icon: <Github className="md:w-full" />
  },
];

const JoinCommunity: React.FC = (props) => {
  return (
    <div className="relative w-full px-4">
      <div className="absolute z-10 bg-radial/90 w-80 h-80 bottom-0 left-0 -translate-x-1/3 translate-y-1/2 rounded-full app-radial" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full py-16 max-w-app mx-auto">
        {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
        <div className="px-6 text-active font-medium text-[1.75rem] leading-[1.2] md:text-[2.5rem] md:leading-normal md:px-16 md:mt-24 flex flex-col md:flex-row gap-x-3 items-center">
          <span>Join the</span><span>Scuba Community</span>
        </div>
        <div className="p-6 text-center text-white/50 text-base leading-7 md:text-[1.375rem] md:leading-[1.2]">
          Get ready to Scuba dive, Enjoy your Privacy Diving in the Web3 Ocean
        </div>
        <div className="flex gap-4 md:py-12 flex-col md:flex-row justify-between items-center w-full">
          {mediaList.map(media => (
            <a href={media.link} target="_blank" key={media.name} className="border border-white/20 text-white/60 w-full h-24 px-6 md:flex-1 md:max-w-[13.75rem] md:h-[6.875rem] flex items-center justify-center rounded-2xl md:hover:bg-header md:hover:text-white md:hover:border-white transition-all">
              {media.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
};

export default JoinCommunity;
