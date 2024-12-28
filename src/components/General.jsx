/* eslint-disable react/prop-types */
import './General.css';
import { useState } from 'react';

export default function General({ formData, setFormData }) {
  const [isVisible, setIsVisible] = useState({
    name: false,
    email: false,
    phone: false,
    website: false,
  });

  function handleEditButtonClick(field) {
    setIsVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  }

  return (
    <div>
      <h2>General Information</h2>
      <div className="general__details__container">
        {Object.keys(formData).map((field) => (
          <div className="general__item__container" key={field}>
            <p className={`general__${field}`}>
              <strong>{`${field.charAt(0).toUpperCase() + field.slice(1)}:`}</strong>{' '}
              {formData[field]}
            </p>
            <input
              type="text"
              className="general__input"
              placeholder={formData[field]}
              value={formData[field]}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  general: {
                    ...prev.general,
                    [field]: e.target.value,
                  },
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
