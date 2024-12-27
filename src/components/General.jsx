/* eslint-disable react/prop-types */
import { useState } from 'react';
import './General.css';

export default function General() {
  const [formData, setFormData] = useState({
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    phone: '000-000-0000',
    website: 'github.com/jane',
  });

  const [isVisible, setIsVisible] = useState({
    name: false,
    email: false,
    phone: false,
    website: false,
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
        {isVisible['name'] ? 'Done' : 'Edit'}
      </button>
    );
  }

  return (
    <div>
      <h2>General Information</h2>
      <div className="general__details__container">
        <div className="general__item__container">
          <p className="general__name">
            <strong>Name:</strong> {formData.name}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            hidden={!isVisible['name']}
          />
          <Button field={'name'} />
        </div>

        <div className="general__item__container">
          <p className="general__email">
            <strong>Email:</strong> {formData.email}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            hidden={!isVisible['email']}
          />
          <Button field={'email'} />
        </div>
        <div className="general__item__container">
          <p className="general__phone">
            <strong>Phone: </strong>
            {formData.phone}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            hidden={!isVisible['phone']}
          />
          <button
            onClick={() => handleEditButtonClick('phone')}
            style={{
              backgroundColor: isVisible['phone'] ? 'green' : '',
              color: isVisible['phone'] ? 'white' : '',
            }}
          >
            {isVisible['phone'] ? 'Done' : 'Edit'}
          </button>
        </div>
        <div className="general__item__container">
          <p className="general__website">
            <strong>Website: </strong>
            {formData.website}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={formData.website}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, website: e.target.value }))
            }
            hidden={!isVisible['website']}
          />
          <button
            onClick={() => handleEditButtonClick('website')}
            style={{
              backgroundColor: isVisible['website'] ? 'green' : '',
              color: isVisible['website'] ? 'white' : '',
            }}
          >
            {isVisible['website'] ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}
