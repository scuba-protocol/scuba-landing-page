import React from 'react'

import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { COMMUNITY, URLS } from '@config/constants';

interface IAppHeader {}

const AppHeader: React.FC<IAppHeader> = (props) => {
  const navigate = useNavigate();
  const handleLaunch = () => {
    window.open(URLS.DAPP, '_blank');
  }
  return (
    <div className="fixed w-screen flex items-center justify-center z-50">
      <header className="md:mt-6 md:max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-8rem)] md:rounded-full md:border md:p-4 md:pl-8 border-b backdrop-blur-xl absolute bg-header top-0 flex justify-between items-center py-3 px-4 z-50 w-screen border-white/10">
        <Logo
          className="relative -top-1 md:-top-2 h-9 md:h-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="flex items-center md:gap-2 lg:gap-4">
          <Link to="/leaderBoard" className="app-link py-2 md:px-2 lg:px-3 hidden md:flex">Leader Board</Link>
          <a className="app-link py-2 md:px-2 lg:px-3 hidden md:flex" target="_blank" href={URLS.CAMPAIGN}>Campaign</a>
          <a className="app-link py-2 md:px-2 lg:px-3 hidden md:flex" target="_blank" href={URLS.GITBOOK}>Docs</a>
          <a className="app-link py-2 md:px-2 lg:px-3 hidden md:flex" target="_blank" href={COMMUNITY.DISCORD}>Community</a>
          <button className="btn-launch ml-1 lg:ml-3" onClick={handleLaunch}>
            Launch DAPP
          </button>
        </div>
      </header>
    </div>
  )
};

export default AppHeader;
