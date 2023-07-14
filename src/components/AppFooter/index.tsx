import React from 'react'
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

import { ReactComponent as Logo } from '@assets/icons/footer-logo.svg';
import { ReactComponent as Twitter } from '@assets/icons/twitter.svg';
import { ReactComponent as Telegram } from '@assets/icons/telegram.svg';
import { ReactComponent as Discord } from '@assets/icons/discord.svg';
import { ReactComponent as Medium } from '@assets/icons/medium.svg';
import { ReactComponent as Github } from '@assets/icons/github.svg';
import { COMMUNITY, URLS } from '@config/constants';

const mediaList = [
  {
    name: 'Twitter',
    link: COMMUNITY.TWITTER,
    icon: <Twitter />
  },
  {
    name: 'Telegram',
    link: '',
    icon: <Telegram />
  },
  {
    name: 'Discord',
    link: COMMUNITY.DISCORD,
    icon: <Discord />
  },
  {
    name: 'Medium',
    link: COMMUNITY.MEDIUM,
    icon: <Medium />
  },
  {
    name: 'Github',
    link: COMMUNITY.GITHUB,
    icon: <Github />
  },
];
const AppFooter: React.FC = (props) => {
  return (
    <footer className="px-4 py-16 lg:px-16 flex flex-col gap-y-6 lg:gap-y-12 w-screen absolute bottom-0 z-50">
      <div className="w-full flex flex-col lg:flex-row gap-y-12 justify-between items-baseline">
        <Logo className="h-10" />
        <div className="flex gap-x-6 lg:gap-x-16 items-center text-sm leading-normal text-footer">
          <Link className="lg:hover:text-active" to="/leaderBoard">Leader Board</Link>
          <a className="lg:hover:text-active" target="_blank" href={URLS.CAMPAIGN}>Campaign</a>
          <a className="lg:hover:text-active" target="_blank" href={URLS.GITBOOK}>Docs</a>
          <a className="lg:hover:text-active" target="_blank" href={COMMUNITY.DISCORD}>Community</a>
          <a className="lg:hover:text-active" target="_blank" href={URLS.DAPP}>Launch DAPP</a>
        </div>
      </div>
      <Divider dashed className="my-0 border-white/10" />
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="text-footer text-xs leading-normal flex-1 max-w-3xl">
          Scuba Protocol is a zero-knowledge Smart Account Layer built on a novel Optimistic Rollup for ZKP operations that enables all ZKP enhanced asset operations and applications safely and efficiently.
        </div>
        <div className="flex gap-4 items-center pt-6 lg:pl-12 justify-end">
          {mediaList.map(media => (
            <a href={media.link} key={media.name} className="text-white lg:hover:text-active">
              {media.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="text-footer/30 text-xs leading-normal">
        ©2023 Scuba
      </div>
    </footer>
  )
};

export default AppFooter;
