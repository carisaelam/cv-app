/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Educational.css';

export default function Educational({ formData, setFormData, index }) {
  console.log('within Educational formData', formData);

  const [isVisible, setIsVisible] = useState({
    schoolName: false,
    fieldOfStudy: false,
    startYear: false,
    endYear: false,
  });

  function handleEditButtonClick(field) {
    setIsVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  function titleCase(string) {
    let titleStrings = {
      schoolName: 'School Name: ',
      fieldOfStudy: 'Field of Study: ',
      startYear: 'Start Year: ',
      endYear: 'End Year: ',
    };

    return titleStrings[string];
  }

  function handleChange(field, value) {
    setFormData((prev) => {
      const updatedEducational = [...prev.educational];
      updatedEducational[index][field] = value;
      return {
        ...prev,
        educational: updatedEducational,
      };
    });
  }

  return (
    <div>
      <div className="educational__details__container">
        {Object.keys(formData).map((field) => (
          <div className="educational__item__container" key={field}>
            <p className={`educational__${field}`}>
              <strong>{titleCase(field)}</strong> {formData[field]}
            </p>
            <input
              type="text"
              className="educational__input"
              placeholder={formData[field]}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              hidden={!isVisible[field]}
            />
            <button
              onClick={() => handleEditButtonClick(field)}
              style={{
                backgroundColor: isVisible[field] ? 'green' : '',
                color: isVisible[field] ? 'white' : '',
              }}
            >
              {isVisible[field] ? 'Done' : 'Edit'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
