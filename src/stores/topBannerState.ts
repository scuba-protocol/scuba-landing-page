import { atom, AtomEffect } from "recoil";

type TopBannerStateType = {
  open: boolean;
}

const localStorageEffect: AtomEffect<TopBannerStateType> = ({ setSelf, onSet }) => {
  const key = 'top_banner_state';
  const rawTopBannerState = localStorage.getItem(key);
  if (rawTopBannerState) {
    setSelf(JSON.parse(rawTopBannerState));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

const TopBannerState = atom<TopBannerStateType>({
  key: 'TopBannerState',
  default: {
    open: true
  },
  effects_UNSTABLE: [localStorageEffect],
});

export default TopBannerState;
