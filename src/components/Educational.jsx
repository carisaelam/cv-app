/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Educational.css';

export default function Educational() {
  const [formData, setFormData] = useState({
    schoolName: 'UGA',
    fieldOfStudy: 'Biology',
    graduationYear: '2010',
  });

  const [isVisible, setIsVisible] = useState({
    schoolName: false,
    fieldOfStudy: false,
    graduationYear: false,
  });

  function handleEditButtonClick(field) {
    console.log('running handleEditButtonClick, field', field);
    setIsVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  function Button({ field }) {
    return (
      <button
        onClick={() => handleEditButtonClick(field)}
        style={{
          backgroundColor: isVisible[field] ? 'green' : '',
          color: isVisible[field] ? 'white' : '',
        }}
      >
        {isVisible[field] ? 'Done' : 'Edit'}
      </button>
    );
  }

  return (
    <div>
      <h2>Educational Information</h2>
      <div className="educational__details__container">
        <div className="educational__item__container">
          <p className="educational__company__name">
            <strong>School Name:</strong> {formData.schoolName}
          </p>
          <input
            type="text"
            className="educational__input"
            placeholder={formData.schoolName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, schoolName: e.target.value }))
            }
            hidden={!isVisible['schoolName']}
          />
          <Button field={'schoolName'} />
        </div>

        <div className="educational__item__container">
          <p className="educational__position__title">
            <strong>Field of Study:</strong> {formData.fieldOfStudy}
          </p>
          <input
            type="text"
            className="educational__input"
            placeholder={formData.fieldOfStudy}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                fieldOfStudy: e.target.value,
              }))
            }
            hidden={!isVisible['fieldOfStudy']}
          />
          <Button field={'fieldOfStudy'} />
        </div>

        <div className="educational__item__container">
          <p className="educational__main__responsibilities">
            <strong>Graduation Year: </strong>
            {formData.graduationYear}
          </p>
          <input
            type="text"
            className="educational__input"
            placeholder={formData.graduationYear}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                graduationYear: e.target.value,
              }))
            }
            hidden={!isVisible['graduationYear']}
          />
          <Button field={'graduationYear'} />
        </div>
      </div>
    </div>
  );
}
