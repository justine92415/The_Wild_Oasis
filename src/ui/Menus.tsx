import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

// Define types for the components
type MenusContextType = {
  openId: number | null;
  close: () => void;
  open: (id: number) => void;
  position: Position | null;
  setPosition: (position: Position) => void;
};
type Position = { x: number; y: number };

type MenusProps = {
  children: ReactNode;
};

type MenuProps = {
  children: ReactNode;
};

type ToggleProps = {
  id: number;
};

type ListProps = {
  id: number;
  children: ReactNode;
  position?: Position;
};

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  icon: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Create context for menu functionality
const MenusContext = createContext<MenusContextType>({
  openId: null,
  close: () => {},
  open: () => {},
  position: null,
  setPosition: () => {},
});

function Menus({ children }: MenusProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const close = () => setOpenId(null);
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{
        openId,
        close,
        open,
        position,
        setPosition,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }: MenuProps) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }: ToggleProps) {
  const { openId, close, open, setPosition } =
    useContext<MenusContextType>(MenusContext);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = (e.target as Element)
      .closest("button")!
      .getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === null || openId !== id ? open(id) : close();
  }

  return (
    <button
      className="hover:bg-grey-100 translate-x-2 rounded-sm border-0 bg-transparent p-1
        transition-all duration-200"
      onClick={handleClick}
    >
      <span className="[&>svg]:text-grey-700 [&>svg]:h-6 [&>svg]:w-6">
        <HiEllipsisVertical />
      </span>
    </button>
  );
}

function List({ id, children }: ListProps) {
  const { openId, position, close } = useContext<MenusContextType>(MenusContext);
  const ref = useOutsideClick<HTMLUListElement>(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className="bg-grey-0 fixed rounded-md shadow-md"
      style={{
        right: `${position?.x}px`,
        top: `${position?.y}px`,
      }}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick, disabled }: ButtonProps) {
  const { close } = useContext<MenusContextType>(MenusContext);
  
  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="hover:bg-grey-50 [&>svg]:text-grey-400 flex w-full items-center gap-4 border-0
          bg-transparent px-6 py-3 text-left text-sm transition-all duration-200
          [&>svg]:h-3 [&>svg]:w-3 [&>svg]:transition-all [&>svg]:duration-300"
        onClick={handleClick}
        disabled={disabled}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

// Add types to the composed components
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
