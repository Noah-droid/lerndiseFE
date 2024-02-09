import { Link } from "react-router-dom";
import Teacher from "../assets/teacher.png";

const LoginScreen = () => {
  return (
    <div className="h-screen flex gap-x-[98px]">
      <div className="w-1/2 pt-5 bg-lerndis-black-pearl flex flex-col items-center justify-center">
        <h1 className="w-[557px] font-display text-white font-bold text-[2rem]/[48px] text-center">
          “Innovation starts with you. Empower the next generation, one lesson
          at a time.”
        </h1>
        <img
          className="w-[500px]"
          src={Teacher}
          alt="A Teacher teaching on the board"
        />
      </div>
      <div className="w-1/2 mt-[80px]">
        <div className="w-[368px] h-[476px] flex flex-col gap-y-10">
          <h2 className="text-2xl font-display text-lerndis-orange font-bold">
            Lerndise
          </h2>
          <div>
            <h2 className="font-body font-semibold text-[2rem]/[40px] text-lerndis-black">
              Welcome Back!
            </h2>
            <p className="font-body font-normal text-base text-lerndis-light-grey">
              Kindly provide your details to get on the platform.
            </p>
          </div>
          <form>
            <div>
              <label
                className="font-body font-normal text-base/[18px] text-lerndis-light-grey"
                htmlFor="password"
              >
                E-mail Address
              </label>
              <input
                className="border border-solid border-black block w-full h-[48px] py-[14px] px-4 my-[6px] rounded-[5px] font-body"
                id="email"
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                className="font-body font-normal text-base/[18px] text-lerndis-light-grey"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-solid border-black block w-full h-[48px] py-[14px] px-4 my-[6px] rounded-[5px] font-body"
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <p className="text-right text-base font-semibold font-body">
              Forgot Password?
            </p>
          </form>
          <Link to="/create">
            <button className="w-full h-[56px] text-white font-bold font-body text-base/[20px] bg-lerndis-black-pearl mt-[5px] py-[18px] px-[10px] rounded-[40px] border border-solid border-black self-end">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
