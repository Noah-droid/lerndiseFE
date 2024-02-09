import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  skin?: 'lerndis-black-pearl';
  color?: 'white' | 'lerndis-black-pearl';
  width?: '1/2' | 'full';
}

const ButtonHalf = ({ children, skin, color = 'lerndis-black-pearl', width = '1/2' }: Props) => {
  return (
    <button className={`bg-${skin} w-${width} py-[14px] px-[10px] border-[0.8px] border-solid border-lerndis-black-pearl rounded-[40px] font-body text-xs text-${color}`}>
      {children}
    </button>
  );
};

export default ButtonHalf;
