interface Props {
  label: string;
  placeholder: string;
}

const LabelTextInput = ({ label, placeholder}: Props) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-base text-lerndis-light-grey font-body"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className="font-body block w-full h-[50px] py-[14px] px-[16px] border border-solid border-[#CCCCCC] rounded-[5px] focus:outline-none placeholder:text-sm placeholder:text-[#919BA7] placeholder:font-body"
          id={label}
          placeholder={placeholder}
          type='text'
        />
      </div>
    </>
  );
};

export default LabelTextInput;
