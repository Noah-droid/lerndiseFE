import { ReactNode } from "react";
import AddButton from "../../assets/Add.svg";

interface Props {
  children: ReactNode;
}

const CreateCourseButton = ({children}: Props) => {
  return (
    <button className="w-[147px] h-[48px] rounded-[24px] py-4 px-2.5 bg-lerndis-black-pearl flex gap-x-1 justify-center items-center text-white font-body text-sm/[16px]">
      <img src={AddButton} alt="" />
      {children}
    </button>
  );
};

export default CreateCourseButton;
