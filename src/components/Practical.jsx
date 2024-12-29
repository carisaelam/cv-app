/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Practical.css';

export default function Practical({ formData, setFormData, index }) {
  const [isVisible, setIsVisible] = useState({
    companyName: false,
    positionTitle: false,
    mainResponsibilities: false,
    startDate: false,
    endDate: false,
  });

  function handleEditButtonClick(field) {
    console.log('running handleEditButtonClick, field', field);
    setIsVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  function titleCase(string) {
    let titleStrings = {
      companyName: 'Company Name: ',
      positionTitle: 'Position Title: ',
      mainResponsibilities: 'Main Responsibilities: ',
      startDate: 'Start Date: ',
      endDate: 'End Date: ',
    };

    return titleStrings[string];
  }

  function handleChange(field, value) {
    setFormData((prev) => {
      const updatedPractical = [...prev.practical];
      updatedPractical[index][field] = value;
      return {
        ...prev,
        practical: updatedPractical,
      };
    });
  }

  return (
    <div>
      <div className="practical__details__container">
        {Object.keys(formData).map((field) => (
          <div className="practical__item__container" key={field}>
            <p className={`practical__${field}`}>
              <strong>{titleCase(field)}</strong> {formData[field]}
            </p>
            <input
              type="text"
              className="practical__input"
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
