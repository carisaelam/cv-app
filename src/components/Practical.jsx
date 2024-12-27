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
      <h2>Practical Information</h2>
      <div className="practical__details__container">
        <div className="practical__item__container">
          <p className="practical__company__name">
            <strong>Company Name:</strong> {formData.companyName}
          </p>
          <input
            type="text"
            className="practical__input"
            placeholder={formData.companyName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, companyName: e.target.value }))
            }
            hidden={!isVisible['companyName']}
          />
          <Button field={'companyName'} />
        </div>

        <div className="practical__item__container">
          <p className="practical__position__title">
            <strong>Position Title:</strong> {formData.positionTitle}
          </p>
          <input
            type="text"
            className="practical__input"
            placeholder={formData.positionTitle}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                positionTitle: e.target.value,
              }))
            }
            hidden={!isVisible['positionTitle']}
          />
          <Button field={'positionTitle'} />
        </div>
        <div className="practical__item__container">
          <p className="practical__main__responsibilities">
            <strong>Main Responsibilities: </strong>
            {formData.mainResponsibilities}
          </p>
          <input
            type="text"
            className="practical__input"
            placeholder={formData.mainResponsibilities}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                mainResponsibilities: e.target.value,
              }))
            }
            hidden={!isVisible['mainResponsibilities']}
          />
          <Button field={'mainResponsibilities'} />
        </div>
        <div className="practical__item__container">
          <p className="practical__start__date">
            <strong>Start Date: </strong>
            {formData.startDate}
          </p>
          <input
            type="date"
            className="practical__input"
            placeholder={formData.startDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, startDate: e.target.value }))
            }
            hidden={!isVisible['startDate']}
          />
          <Button field={'startDate'} />
        </div>

        <div className="practical__item__container">
          <p className="practical__end__date">
            <strong>End Date: </strong>
            {formData.endDate}
          </p>
          <input
            type="date"
            className="practical__input"
            placeholder={formData.endDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, endDate: e.target.value }))
            }
            hidden={!isVisible['endDate']}
          />
          <Button field={'endDate'} />
        </div>
      </div>
    </div>
  );
}
