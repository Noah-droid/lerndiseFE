import React, { useState } from 'react';
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
      <div className="ml-[24px] mr-[45px]">
        <DesktopProfileBar />
        <div className="mt-6">
          <HeadingParagraphy
            heading="Add a New Course"
            paragraph="Kindly provide all the information required below."
          />
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course:</label>
              <input type="text" id="title" name="title" placeholder="Social Studies" value={formData.title} onChange={handleChange} required className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Course Topic:</label>
              <input type="text" id="description" name="description" placeholder="Family: Everything you should know" value={formData.description} onChange={handleChange} required className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="introduction" className="block text-sm font-medium text-gray-700">Introduction:</label>
              <textarea id="introduction" name="introduction" placeholder="Write a brief course introduction" value={formData.introduction} onChange={handleChange} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div className="flex gap-x-6 mt-6">
              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save as draft</button>
            </div>
          </form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default AddCourseScreen;
