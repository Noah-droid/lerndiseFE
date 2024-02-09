import Search from "../../assets/search.svg";
import Profile from "../../assets/profile.svg";
import Down from "../../assets/down.svg";
import Rectangle from "../../assets/Rectangle.svg";

const DesktopProfileBar = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center mt-4  border-b border-solid border-[#CCCCCC] mb-[32px]">
          <div className="flex justify-between">
            <input
              className=" flex justify-center border border-solid outline-none border-lerndis-light-grey2 w-[318px] h-11 py-[14px] px-4 my-1.5 rounded-[48px]"
              id="text"
              type="text"
              placeholder="Search here....."
            />
            <img
              className="absolute ml-[16.8rem] mt-3"
              src={Search}
              alt="Search icon"
            />
          </div>
          <p className="font-body text-sm text-lerndis-light-grey2 font-normal mt-5 ml-8 ">
            Monday, 1st january, 2024.
          </p>
          <img className="mr-4 ml-3" src={Rectangle} alt="Search icon" />
          <img className="mr-2" src={Profile} alt="Search icon" />
          <p className=" font-body text-sm text-lerndis-light-grey font-normal mt-5">
            Oluwatimilehin
          </p>
          <button>
            <img
              className="flex justify-center mx-1.5"
              src={Down}
              alt="Search icon"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DesktopProfileBar;
