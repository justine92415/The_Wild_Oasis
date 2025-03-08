import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close?: () => void;
};

const ModalContext = createContext<ModalContextType>({
  openName: "",
  open: () => {},
  close: () => {},
});

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: opensWindowName,
}: {
  children: React.ReactElement<{ onClick?: () => void }>;
  opens: string;
}) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

type ModalProps = {
  children: React.ReactElement<{ onCloseModal: () => void }>;
  name: string;
};

function Window({ children, name }: ModalProps) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 z-[1000] h-screen w-full bg-[rgba(0,0,0,0.3)]
        backdrop-blur-sm transition-all duration-500"
    >
      <div
        className="bg-grey-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
          rounded-lg p-8 shadow-lg transition-all duration-500"
        ref={ref}
      >
        <button
          onClick={close}
          className="hover:bg-grey-100 absolute top-3 right-5 translate-x-2 rounded-sm border-0
            bg-transparent p-1 transition-all duration-200"
        >
          <HiXMark className="text-grey-500 h-6 w-6" />
        </button>
        {cloneElement(children, {
          onCloseModal: close,
        })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
