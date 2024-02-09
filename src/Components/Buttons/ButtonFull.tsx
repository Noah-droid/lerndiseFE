interface Props {
  children: string;
}

const ButtonFull = ({ children }: Props) => {
  return (
    <button className="bg-[#E6E6E6] w-full py-[14px] px-[10px] rounded-[40px] font-body text-xs text-lerndis-black">
      {children}
    </button>
  );
};

export default ButtonFull;
