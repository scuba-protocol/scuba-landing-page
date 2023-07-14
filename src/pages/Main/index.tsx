import cx from 'classnames';
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Framework from './Framework';
import JoinCommunity from './JoinCommunity';
import JoinEvent from './JoinEvent';
import LandingMain from './LandingMain';
import PrivacyJourney from './PrivacyJourney';
import Subscribe from './Subscribe';
import Supply from './Supply';
import SupportedNetworks from './SupportedNetworks';
import SupportedTokens from './SupportedTokens';
import WhatIsScuba from './WhatIsScuba';
import WhyScuba from './WhyScuba';

const Main: React.FC = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    navigate('/', { replace: true });
  }, []);
  return (
    <div className="flex flex-col relative items-start z-30 overflow-hidden pb-[30rem] md:pb-96 lg:px-16">
      <LandingMain />
      <WhatIsScuba />
      <PrivacyJourney />
      <Supply />
      <Framework />
      <WhyScuba />
      <SupportedNetworks />
      <SupportedTokens />
      <Subscribe />
      <JoinEvent />
      <JoinCommunity />
    </div>
  )
}

export default Main;
