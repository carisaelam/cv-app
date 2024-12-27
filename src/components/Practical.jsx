/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Practical.css';

export default function Practical() {
  const [formData, setFormData] = useState({
    companyName: 'Wal-Mart',
    positionTitle: 'CEO',
    mainResponsibilities: 'Running the world, Taking names',
    startDate: 'Enter start date',
    endDate: 'Enter end date',
  });

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

  return (
    <div>
      <h2>Practical Information</h2>
      <div className="practical__details__container">
        {Object.keys(formData).map((field) => (
          <div className="practical__item__container" key={field}>
            <p className={`practical__${field}`}>
              <strong>{`${field.charAt(0).toUpperCase() + field.slice(1)}:`}</strong>{' '}
              {formData[field]}
            </p>
            <input
              type={
                field === 'startDate' || field === 'endDate' ? 'date' : 'text'
              }
              className="practical__input"
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
