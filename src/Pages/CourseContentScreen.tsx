import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonFull from "../Components/Buttons/ButtonFull";
import ButtonHalf from "../Components/Buttons/ButtonHalf";
import GenerateButton from "../Components/Buttons/GenerateButton";
import LabelTextInput from "../Components/Forms/LabelTextInput";
import DesktopProfileBar from "../Components/ProfileBars/DesktopProfileBar";
import HeadingParagraphy from "../Components/Text/HeadingParagraphy";
import DesktopLayout from "../Layouts/DesktopLayout";

const CourseContentScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState(0); // Initialize selectedCourse state
  const [generatedContent, setGeneratedContent] = useState(null); // Initialize generatedContent state

  const handleCourseChange = (e) => {
    setSelectedCourse(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/course-request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "course": selectedCourse }) // Pass selectedCourse in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to submit course content');
      }

      const data = await response.json();
      setGeneratedContent(data.generated_content);

      // Handle success, maybe redirect to another page or show a success message
      console.log('Course content submitted successfully!');
    } catch (error) {
      console.error('Error submitting course content:', error.message);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <DesktopLayout>
      <div>
        <DesktopProfileBar />
        <div className="ml-[24px] mr-[45px]">
          <HeadingParagraphy
            heading="Course Content"
            paragraph="Kindly add the course outline and let the AI help you generate learning resources."
          />
          <form className="flex gap-x-[120px]" onSubmit={handleSubmit}>
            {/* Dropdown menu for selecting the course */}
            <div>
              <label htmlFor="course">Select Course:</label><br />
              <select id="course" name="course" value={selectedCourse} onChange={handleCourseChange} className="mt-2 border border-gray-300 rounded-md p-2">
                <option value={1}>Course 1</option>
                <option value={2}>Course 2</option>
                <option value={3}>Course 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
            {/* Rest of the form */}
            {/* ... */}
            <div className="flex gap-x-6 mt-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate</button>
              <Link className="w-1/2" to="/courseReview">
                <ButtonHalf skin="lerndis-black-pearl" color="white" width="full">
                  Next
                </ButtonHalf>
              </Link>
            </div>
          </form>
        </div>
        {/* Display the generated content */}
        {generatedContent && (
          <div className="ml-[24px] mr-[45px] bg-gray-100 border border-gray-300 rounded-md p-4 mt-4">
            <h2 className="text-lg font-semibold mb-2">Generated Content</h2>
            {/* Render the generated content here */}
            <p className="text-gray-700">{generatedContent}</p>
          </div>
        )}
      </div>
    </DesktopLayout>
  );
};

export default CourseContentScreen;
