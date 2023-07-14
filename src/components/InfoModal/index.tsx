import { Modal } from "antd";

import { ReactComponent as LaurelSVG } from '@assets/images/laurel.svg';
import { ReactComponent as InfoTitleSVG } from '@assets/images/info_title.svg';

interface IInfoModal {
  open: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<IInfoModal> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      centered
      destroyOnClose
      maskStyle={{ background: 'rgba(0, 0, 0, 0.8)' }}
      modalRender={() => (
        <div className="app-modal py-6">
          <LaurelSVG className="absolute -top-10 z-10" />
          <InfoTitleSVG className="absolute -top-4 z-30" />
          <div className="text-white w-full my-6">
            <div className="text-yellow font-bold text-base mb-2">How to play</div>
            <div className="text-sm mb-6">
              Choose the chip and place it on the grid you bet before you roll the dice. You can place multiple chips and the wage stacks.
            </div>
            <div className="text-yellow font-bold text-base mb-2">Odds</div>
            <div className="text-sm px-6">
              <ul className="list-decimal">
                <li>Big/Small: 1 to 1 (three-of-a-kind excluded)</li>
                <li>Three-of-a-kind: 200 to 1</li>
                <li>
                  <div>Single dice:</div>
                  <ul className="list-disc px-5">
                    <li>hit 1: 1 to 1</li>
                    <li>hit 2: 2 to 1</li>
                    <li>hit 3: 11 to 1</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex">
            <button className="btn-modal flex-1" onClick={onClose}>Got it</button>
          </div>
        </div>
      )}
    >
    </Modal>
  );
}

export default InfoModal;
