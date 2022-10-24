import { ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  onClose: () => void;
  state: boolean;
}

export default function Modal({ children, onClose, state }: ModalProps) {
  return state ? (
    <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-8 min-w-[300px] max-w-[600px] max-h-[90%] overflow-y-auto rounded-lg ">
      <div className="relative w-full">
        <div
          onClick={onClose}
          className="absolute w-full flex justify-end -mt-2"
        >
          <div className="w-10 h-10 flex justify-center items-center border rounded-full border-[#2a4767] cursor-pointer text-[#2a4767] text-xl font-roboto">
            x
          </div>
        </div>
      </div>
      {children}
    </div>
  ) : null;
}
