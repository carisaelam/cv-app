import { useState } from 'react';
import './General.css';

export default function General() {
  const [name, setName] = useState('Tony Pizza');
  const [email, setEmail] = useState('tony@gmail.com');
  const [phone, setPhone] = useState('000-111-2222');
  const [website, setWebsite] = useState('github.com/tony');

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
        <div className="general__item__container">
          <p className="general__name">
            <strong>Name:</strong> {name}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={name}
            onChange={(e) => setName((prevName) => e.target.value)}
            hidden={!isVisible['name']}
          />
          <button
            onClick={() => handleEditButtonClick('name')}
            style={{
              backgroundColor: isVisible['name'] ? 'green' : '',
              color: isVisible['name'] ? 'white' : '',
            }}
          >
            {isVisible['name'] ? 'Done' : 'Edit'}
          </button>
        </div>
        <div className="general__item__container">
          <p className="general__email">
            <strong>Email:</strong> {email}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={email}
            onChange={(e) => setEmail((prevEmail) => e.target.value)}
            hidden={!isVisible['email']}
          />
          <button
            onClick={() => handleEditButtonClick('email')}
            style={{
              backgroundColor: isVisible['email'] ? 'green' : '',
              color: isVisible['email'] ? 'white' : '',
            }}
          >
            {isVisible['email'] ? 'Done' : 'Edit'}
          </button>
        </div>
        <div className="general__item__container">
          <p className="general__phone">
            <strong>Phone: </strong>
            {phone}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={phone}
            onChange={(e) => setPhone((prevPhone) => e.target.value)}
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
            {website}
          </p>
          <input
            type="text"
            className="general__input"
            placeholder={website}
            onChange={(e) => setWebsite((prevWebsite) => e.target.value)}
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
