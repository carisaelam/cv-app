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
    setIsVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  return (
    <div>
      <h2>Educational Information</h2>
      <div className="educational__details__container">
      {Object.keys(formData).map((field) => (
          <div className="educational__item__container" key={field}>
            <p className={`educational__${field}`}>
              <strong>{`${field.charAt(0).toUpperCase() + field.slice(1)}:`}</strong>{' '}
              {formData[field]}
            </p>
            <input
              type="text"
              className="educational__input"
              placeholder={formData[field]}
              value={formData[field]}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [field]: e.target.value,
                }))
              }
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
