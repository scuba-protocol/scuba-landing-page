import { Divider } from "antd";
import { useLayoutEffect, useState } from "react";
import cx from 'classnames';

const Campaign: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-[calc(100vh+24rem)] flex items-center justify-center pb-96 relative">
      <div className="absolute z-10 bg-active/50 w-80 h-80 top-0 -left-7 rounded-full app-radial" />
      <div className="absolute z-10 bg-blue/50 w-80 h-80 -bottom-7 -right-7 rounded-full app-radial" />
      <div className="max-w-[35.7rem] flex items-center relative z-20">
        <div className="border border-white/10 bg-header rounded-3xl pt-12 pb-4">
          <div className="text-white text-[2.125rem] leading-[1.2] font-medium mb-5 text-center px-6">
            Scuba Lucky Number Generator
          </div>
          <div className="text-sm leading-normal text-white/80 mb-6 text-center px-6">
            Enter Your UTXO Wallet Address
          </div>
          <div className="text-sm leading-normal text-white/80 py-1 px-6">
            Wallet Address
          </div>
          <div className="py-[0.625rem] px-6">
            <input
              type="text"
              placeholder="Please enter the receiving address"
              value={address}
              className="app-input-address w-full"
              onChange={event => setAddress(event.target.value)}
            />
          </div>
          <Divider className="border-white/5 my-[0.625rem]" />
          <div className="py-[0.625rem] px-6">
            <button
              className={cx(
                'btn-primary w-full',
                {
                  'btn-primary--active': address,
                  'btn-primary--disabled': !address,
                })
              }>
              Get Your Luck Number
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaign;