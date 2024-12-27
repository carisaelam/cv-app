import { useState } from 'react';
import './General.css';

export default function General() {
  const [name, setName] = useState('Tony Pizza');
  const [email, setEmail] = useState('tony@gmail.com');
  const [phone, setPhone] = useState('000-111-2222');
  const [website, setWebsite] = useState('github.com/tony');

  const [nameIsVisible, setNameIsVisible] = useState(false);
  const [emailIsVisible, setEmailIsVisible] = useState(false);

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

  function handleNameEditButtonClick() {
    console.log('running handleEditNameButtonClick');
    setNameIsVisible(!nameIsVisible);
  }

  function handleEmailEditButtonClick() {
    console.log('running handleEditEmailButtonClick');
    setEmailIsVisible(!emailIsVisible);
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
            onClick={handleNameEditButtonClick}
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
            onClick={handleEmailEditButtonClick}
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
          <button onClick={() => editPhone('newPhone')}>Edit</button>
        </div>
        <div className="general__item__container">
          <p className="general__website">
            <strong>Website: </strong>
            {website}
          </p>
          <button onClick={() => editWebsite('newWebsite')}>Edit</button>
        </div>
      </div>
    </div>
  );
}
