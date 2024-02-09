import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LabelTextInput from "../Components/Forms/LabelTextInput";
import DesktopProfileBar from "../Components/ProfileBars/DesktopProfileBar";
import HeadingParagraphyBase from "../Components/Text/HeadingParagraphyBase";
import DesktopLayout from "../Layouts/DesktopLayout";
import Family from "../assets/family2.png";

const CourseReviewScreen = () => {
  const [generatedCourse, setGeneratedCourse] = useState({}); // State to hold the generated course

  useEffect(() => {
    // Fetch the generated course content when the component mounts
    fetchGeneratedCourse();
  }, []);

  const fetchGeneratedCourse = async () => {
    // Simulating fetching generated course content from an API
    // Replace this with actual fetch call to your API
    const response = await fetch('http://127.0.0.1:8000/api/course-request/');
    if (response.ok) {
      const data = await response.json();
      setGeneratedCourse(data);
    } else {
      console.error('Failed to fetch generated course content');
    }
  };

  return (
    <DesktopLayout>
      <div>
        <DesktopProfileBar />
        <div className="ml-[24px] mr-[45px]">
          <HeadingParagraphyBase
            heading="Course Content Review"
            paragraph="Kindly review content before publishing."
          />
        </div>
        <div className="px-4">
          <div className="flex gap-x-6">
            <img
              className="border border-solid border-lerndis-light-grey w-[400px] h-[300]"
              src={Family}
              alt=""
            />
            <div className="font-body">
              <HeadingParagraphyBase
                heading="Family: Everything family should know"
                paragraph="Social Studies"
              />
              <h2 className="text-base text-lerndis-blue">Introduction</h2>
              <p className="text-lerndis-light-grey text-sm/[24px]">
                {/* Render the generated introduction here */}
                {generatedCourse.introduction}
              </p>
            </div>
          </div>
          <form className="flex gap-x-[120px]">
            <div className="w-1/2 flex flex-col gap-y-5">
              <div>
                <LabelTextInput
                  label="Outline 1"
                  placeholder="Understanding the family"
                />
              </div>
              <div>
                <LabelTextInput
                  label="Outline 2"
                  placeholder="Understanding the family"
                />
              </div>
              <div>
                <LabelTextInput
                  label="Outline 3"
                  placeholder="Understanding the family"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-5">
              <div>
                <LabelTextInput
                  label="Outline 4"
                  placeholder="Understanding the family"
                />
              </div>
              <div>
                <LabelTextInput
                  label="Outline 5"
                  placeholder="Understanding the family"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default CourseReviewScreen;
