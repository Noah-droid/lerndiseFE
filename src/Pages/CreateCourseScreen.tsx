import CreateCourseButton from "../Components/Buttons/CreateCourseButton";
import CreateCourse from "../assets/CreateCourse.png";
import DesktopLayout from "../Layouts/DesktopLayout";
import { Link } from "react-router-dom";
import DesktopProfileBar from "../Components/ProfileBars/DesktopProfileBar";

const CreateCourseScreen = () => {
  return (
    <DesktopLayout>
      <div className="font-body">
        <DesktopProfileBar />
        <div className="border-b border-solid border-lerndis-grey ml-[24px] mr-[45px] pb-4 flex justify-between">
          <div>
            <h2 className="text-base text-lerndis-light-grey">Welcome,</h2>
            <p className="font-bold text-[24px]/[32px] text-lerndis-black-pearl">
              Oluwatimilehin
            </p>
          </div>
          <Link to="/add">

          <CreateCourseButton>
          Create Course
          </CreateCourseButton>
          </Link>
        </div>
        <div className="mt-[80px] flex flex-col items-center">
          <div className="w-[500px] flex flex-col items-center">
            <img src={CreateCourse} alt="" />
            <p className="text-center text-base text-lerndis-black">
              Teaching isn't just about sharing knowledge; it's about igniting a
              spark within your students. And now, with the world of Edtech open
              before you, you have the power to fan that spark into a roaring
              flame. Click on the{" "}
              <span className="text-lerndis-blue font-semibold">
                <Link to="/add">Create Course</Link>
              </span>{" "}
              button to start.
            </p>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default CreateCourseScreen;
