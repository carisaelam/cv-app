import { useState } from 'react';
import './General.css';

export default function General() {
  const [name, setName] = useState('Tony Pizza');
  const [email, setEmail] = useState('tony@gmail.com');
  const [phone, setPhone] = useState('000-111-2222');
  const [website, setWebsite] = useState('github.com/tony');

  return (
    <div>
      <h2>General Information</h2>
      <div className="general__details__container">
        <div className="general__item__container">
          <p className="general__name">
            <strong>Name:</strong> {name}
          </p>
          <button>Edit</button>
        </div>
        <div className="general__item__container">
          <p className="general__email">
            <strong>Email:</strong> {email}
          </p>
          <button>Edit</button>

        </div>
        <div className="general__item__container">
          <p className="general__phone">
            <strong>Phone: </strong>
            {phone}
          </p>
          <button>Edit</button>

        </div>
        <div className="general__item__container">
          <p className="general__website">
            <strong>Website: </strong>
            {website}
          </p>
          <button>Edit</button>

        </div>
      </div>
    </div>
  );
}
