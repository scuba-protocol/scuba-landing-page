
import { ReactComponent as BNB } from '../../assets/icons/bnb.svg';

interface ITokenIcon {
  chainId: string;
  className?: string;
}

const TokenConfig: { [key: string]: JSX.Element } = {
  '97': <BNB className="w-full h-full" />
};

const TokenIcon: React.FC<ITokenIcon> = ({ chainId, className = '' }) => {
  return (
    <div className={className}>
      {TokenConfig[chainId]}
    </div>
  );
}

export default TokenIcon;
