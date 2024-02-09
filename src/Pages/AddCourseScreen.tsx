import React, { useState } from 'react';
import Form from '../Components/Forms/Form';
import InputFile from '../Components/Forms/InputFile';
import LabelTextInput from '../Components/Forms/LabelTextInput';
import DesktopProfileBar from '../Components/ProfileBars/DesktopProfileBar';
import HeadingParagraphy from '../Components/Text/HeadingParagraphy';
import DesktopLayout from '../Layouts/DesktopLayout';

const AddCourseScreen = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    introduction: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData:', formData); // Log the formData before making the API call
    try {
      const response = await fetch('http://127.0.0.1:8000/api/courses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to add course');
      }

      // Handle success, maybe redirect to another page or show a success message
      console.log('Course added successfully!');
    } catch (error) {
      console.error('Error adding course:', error.message);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <DesktopLayout>
      <div>
        <DesktopProfileBar />
        <div className="ml-[24px] mr-[45px]">
          <HeadingParagraphy
            heading="Add a New Course"
            paragraph="Kindly provide all the information required below."
          />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Course:</label><br />
              <input type="text" id="title" name="title" placeholder="Social Studies" value={formData.title} onChange={handleChange} required /><br />
            </div>
            <div>
              <label htmlFor="description">Course Topic:</label><br />
              <input type="text" id="description" name="description" placeholder="Family: Everything you should know" value={formData.description} onChange={handleChange} required /><br />
            </div>
            <div>
              <label htmlFor="introduction">Introduction:</label><br />
              <textarea id="introduction" name="introduction" placeholder="Write a brief course introduction" value={formData.introduction} onChange={handleChange} ></textarea><br />
            </div>
            <div className="flex gap-x-6">
              <button type="submit">Save as draft</button>
              {/* <Link className="w-1/2" to="/createContent">
                <ButtonHalf skin="lerndis-black-pearl" color="white" width="full">
                  Next
                </ButtonHalf>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default AddCourseScreen;
