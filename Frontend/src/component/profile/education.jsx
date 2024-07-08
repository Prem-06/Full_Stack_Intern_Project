import React, { useState } from 'react';
import './education.css';

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value
    });
  };

  const handleAddOrUpdateEducation = () => {
    if (isEditing) {
      const updatedList = [...educationList];
      updatedList[currentIndex] = newEducation;
      setEducationList(updatedList);
      setIsEditing(false);
    } else {
      setEducationList([...educationList, newEducation]);
    }
    setNewEducation({
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    });
  };

  const handleEdit = (index) => {
    setNewEducation(educationList[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };

  return (
    <div className='education'>
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree} in {edu.fieldOfStudy}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="education-form">
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={newEducation.institution}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fieldOfStudy"
          placeholder="Field of Study"
          value={newEducation.fieldOfStudy}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={newEducation.startDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={newEducation.endDate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOrUpdateEducation}>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default Education;
