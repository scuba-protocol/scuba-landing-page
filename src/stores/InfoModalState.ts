import { atom } from "recoil";

type InfoModalStateType = {
  open: boolean;
}

const InfoModalState = atom<InfoModalStateType>({
  key: 'InfoModalState',
  default: {
    open: false
  }
});

export default InfoModalState;
