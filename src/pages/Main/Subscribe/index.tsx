import React from 'react'
import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import axios from 'axios';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const headers = new Headers();
headers.append("Content-Type", "text/plain;charset=utf-8");

const Subscribe: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);

  const handleSubscribe = () => {
    if (email && emailRegex.test(email)) {
      setPending(true);
      axios.post(
        'https://cqwqgib77ikehozek4rkr27anu0qyoze.lambda-url.us-west-2.on.aws',
        { email_address: email, tags: ['landing_page'] }
      )
        .then(() => {
          api.success({
            message: 'Thank you for subscribing!',
            description: 'You have successfully subscribed to our list.',
            placement: 'bottomRight',
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setEmail('');
          setPending(false);
        });
    }
  }
  return (
    <div className="relative z-20 flex flex-col items-center justify-center py-16 px-4 lg:px-0 w-full">
      {contextHolder}
      {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
      <div className="bg-active rounded-[2rem] md:rounded-[4rem] px-4 py-16 md:px-16 w-full text-black text-center max-w-app mx-auto">
        <div className="font-medium text-[1.75rem] leading-[1.2] md:text-[2.5rem] md:leading-[1.2] mb-8 md:mt-8">
          Subscribe for Updates
        </div>
        <div className="text-base leading-[1.75] max-w-4xl mx-auto opacity-60">
          By submitting your email, you consent to receive emails from Scuba Protocol. Be the first to get updates on the Scuba Protocol launch, the latest features, and upcoming airdrops and events.
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center mt-8 md:mb-8">
          <input
            type="email"
            placeholder="Your email address"
            className="app-input md:max-w-[33rem] flex-1 w-full md:w-auto"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button
            className="btn-black w-full md:w-auto"
            disabled={pending}
            onClick={handleSubscribe}
          >
            {pending ? <LoadingOutlined /> : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  )
};

export default Subscribe;
