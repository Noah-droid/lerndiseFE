import UploadIcon from "../../assets/UploadIcon.svg";
import { useRef, useState } from "react";

interface Props {
  label: string;
}

const InputFile = ({label}: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File[]>([]);

  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files ?? []);
    setSelectedFile(files);
  };
  return (
    <>
       <label
          className="block text-base text-lerndis-light-grey font-body"
          htmlFor={label}
        >
          {label}
        </label>
      <div
        className="cursor-pointer flex flex-col justify-center items-center font-body w-full h-[50px] py-[40px] px-[16px] mb-[16px] border border-solid border-[#CCCCCC] rounded-[5px]"
        onClick={handleClick}
      >
        <img className="w-[20px] h-[20px]" src={UploadIcon} alt="" />
        <p className="text-center font-body text-sm text-lerndis-grey-600">
          Click to Add Image <br /> (640*460 recommended).
        </p>
        <input
          type="file"
          accept="image/*"
          ref={ref}
          className="hidden"
          onChange={handleChange}
        />
      </div>
      {/* display selected files */}
      {!!selectedFile.length && (
        <div className="mt-4 bg-violet-50 overflow-hidden text-ellipsis">
          <p>Selected Files:</p>
          {selectedFile.map((file, i) => {
            return (
              <span key={i} className="text-violet-500 whitespace-nowrap">{file.name}</span>
            )
          })}
        </div>
      )}
    </>
  );
};

export default InputFile;
