import Portals from "@/components/Portals/Portals";
import cn from "@/utlis/cn";
import { createContext, ReactNode, useContext, useRef } from "react";

const ModalContext = createContext<TModal | null>(null);

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modals = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutSideClose = (e: any) => {
    if (!containerRef?.current?.contains(e.target)) {
      onClose();
    }
  };
  return (
    <ModalContext.Provider value={{ onClose } as any}>
      <Portals>
        <div
          className={cn(
            `fixed inset-0 z-[999] flex justify-center items-center bg-gray-500/70 invisible`,
            {
              visible: isOpen,
            }
          )}
        >
          <div
            ref={containerRef}
            onClick={handleOutSideClose}
            className="bg-white w-full max-w-sm rounded-sm p-2"
          >
            <Modals.CloseButton />
            {children}
          </div>
        </div>
      </Portals>
    </ModalContext.Provider>
  );
};

//Compound Component
const CloseButton = () => {
  const { onClose } = useContext(ModalContext) as TModal;
  return (
    <span
      onClick={() => onClose()}
      className="flex justify-end mr-2 text-red-600 hover:text-red-500 cursor-pointer"
    >
      Close
    </span>
  );
};

Modals.CloseButton = CloseButton;
export default Modals;
