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
            `fixed inset-0 z-[999] flex justify-center items-center bg-gray-500/70 overflow-auto transition-opacity`,
            { "opacity-100 visible": isOpen, "opacity-0 invisible": !isOpen }
          )}
          style={{
            height: isOpen ? "100vh" : "0",
            transition: "height 0.3s ease",
          }}
        >
          <div
            ref={containerRef}
            onClick={handleOutSideClose}
            className={cn(
              "bg-white w-full max-w-sm md:max-w-md lg:max-w-lg p-2 rounded-md shadow-lg transition-all duration-300 overflow-x-hidden",
              {
                "h-auto max-h-[90vh] overflow-y-auto overflow-x-hidden": isOpen,
              }
            )}
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
      className="flex justify-end mr-2 md-range:mt-4 mt-24 md:mt-10 lg:mt-0 text-red-600 hover:text-red-500 cursor-pointer"
    >
      Close
    </span>
  );
};

Modals.CloseButton = CloseButton;
export default Modals;
