import { useState } from 'react';
import './General.css';

export default function General() {
  const [name, setName] = useState('Tony Pizza');
  const [email, setEmail] = useState('tony@gmail.com');
  const [phone, setPhone] = useState('000-111-2222');
  const [website, setWebsite] = useState('github.com/tony');

  const [nameIsVisible, setNameIsVisible] = useState(false);
  const [emailIsVisible, setEmailIsVisible] = useState(false);
  const [phoneIsVisible, setPhoneIsVisible] = useState(false);
  const [websiteIsVisible, setWebsiteIsVisible] = useState(false);

  function editName(newName) {
    console.log('running editName with: ', newName);
    setName((prevName) => newName);
  }

  function editEmail(newEmail) {
    console.log('running editEmail');
    setEmail((prevEmail) => newEmail);
  }

  function editPhone(newPhone) {
    console.log('running editPhone');
    setPhone((prevPhone) => newPhone);
  }

  function editWebsite(newWebsite) {
    console.log('running editWebsite');
    setWebsite((prevWebsite) => newWebsite);
  }

  function handleEditButtonClick(field) {
    if (field === 'name') {
      setNameIsVisible(!nameIsVisible);
    } else if (field === 'email') {
      setEmailIsVisible(!emailIsVisible);
    } else if (field === 'phone') {
      setPhoneIsVisible(!phoneIsVisible);
    } else if (field === 'website') {
      setWebsiteIsVisible(!websiteIsVisible);
    }
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
            onChange={(e) => editName(e.target.value)}
            hidden={!nameIsVisible}
          />
          <button
            onClick={() => handleEditButtonClick('name')}
            style={{
              backgroundColor: nameIsVisible ? 'green' : '',
              color: nameIsVisible ? 'white' : '',
            }}
          >
            {nameIsVisible ? 'Done' : 'Edit'}
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
            onChange={(e) => editEmail(e.target.value)}
            hidden={!emailIsVisible}
          />
          <button
            onClick={() => handleEditButtonClick('email')}
            style={{
              backgroundColor: emailIsVisible ? 'green' : '',
              color: emailIsVisible ? 'white' : '',
            }}
          >
            {emailIsVisible ? 'Done' : 'Edit'}
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
            onChange={(e) => editPhone(e.target.value)}
            hidden={!phoneIsVisible}
          />
          <button
            onClick={() => handleEditButtonClick('phone')}
            style={{
              backgroundColor: phoneIsVisible ? 'green' : '',
              color: phoneIsVisible ? 'white' : '',
            }}
          >
            {phoneIsVisible ? 'Done' : 'Edit'}
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
            onChange={(e) => editWebsite(e.target.value)}
            hidden={!websiteIsVisible}
          />
          <button
            onClick={() => handleEditButtonClick('website')}
            style={{
              backgroundColor: websiteIsVisible ? 'green' : '',
              color: websiteIsVisible ? 'white' : '',
            }}
          >
            {websiteIsVisible ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}
