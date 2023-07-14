import React from 'react'

const Subscribe: React.FC = (props) => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center py-16 px-4 lg:px-0 w-full">
      {/* <RadialSVG className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[32rem] blur-xl" /> */}
      <div className="bg-active rounded-[2rem] md:rounded-[4rem] px-4 py-16 md:px-16 w-full text-black text-center max-w-app mx-auto">
        <div className="font-medium text-[1.75rem] leading-[1.2] md:text-[2.5rem] md:leading-[1.2] mb-8 md:mt-8">
          Subscribe for Updates
        </div>
        <div className="text-base leading-[1.75] max-w-4xl mx-auto opacity-60">
          By submitting your email, you consent to receive emails from Scuba Protocol. Be the first to get updates on the Scuba Protocol launch, the latest features, and upcoming airdrops and events.
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center mt-8 md:mb-8">
          <input type="email" placeholder="Your email address" className="app-input md:max-w-[33rem] flex-1 w-full md:w-auto" />
          <button className="btn-black w-full md:w-auto">Subscribe</button>
        </div>
      </div>
    </div>
  )
};

export default Subscribe;
