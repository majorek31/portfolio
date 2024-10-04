import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import CloseCross from "../assets/cross.svg";

type ModalContextType = {
  openModal: (content: ReactNode, title?: string | null) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  title: string | null;
  isOpen: boolean;
};

const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderType = {
  children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderType) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);

  const openModal = (content: ReactNode, title: string | null = null) => {
    if (isOpen) throw new Error("Cannot open two modals simultaneously");
    setModalContent(content);
    setTitle(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle(null);
    setModalContent(null);
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key == "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isOpen, modalContent, title }}
    >
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm">
            <div className="flex w-full h-full justify-center items-center">
              <div className="bg-white overflow-hidden rounded-lg">
                <div className="flex shadow-md items-center justify-between p-2">
                  <h2>{title}</h2>
                  <img
                    src={CloseCross}
                    onClick={() => closeModal()}
                    alt="Close modal"
                    className="cursor-pointer size-5"
                  />
                </div>
                <div className="p-5">{modalContent}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("You must use ModalContext withing ModalContextProvider");
  return context;
};
