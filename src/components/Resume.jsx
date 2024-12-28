/* eslint-disable react/prop-types */
import './Resume.css';

export default function Resume({ formData }) {
  return (
    <>
      {/* General Information Section */}
      <div>
        <div className="header__container">
          <h1>{formData.general.name}</h1>
          <ul className="header__list__items__container">
            <li>{formData.general.email}</li> |<li>{formData.general.phone}</li>{' '}
            |<li>{formData.general.website}</li>
          </ul>
        </div>
      </div>

      {/* Educational Information Section */}
      <div className="educational__container">
        <h2>Education</h2>
        <div className="school__container">
          <h3>{formData.educational.schoolName}</h3>
          <div className="school__info">
            <div>
              <p className="field__of__study">
                {formData.educational.fieldOfStudy}
              </p>
            </div>
            <div>
              <p className="graduation__years">
                {formData.educational.startYear}– {formData.educational.endYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Practical Information Section */}
      <div className="experience__container">
        <h2>Work Experience</h2>
        <div className="practical__container">
          <div className="practical__header">
            <div>
              <h3>
                {formData.practical.positionTitle}:{' '}
                {formData.practical.companyName}
              </h3>
            </div>
            <div>
              <p>
                {formData.practical.startDate}–{formData.practical.endDate}
              </p>
            </div>
          </div>
          <div className="practical__info">
            <p>{formData.practical.mainResponsibilities}</p>
          </div>
        </div>
      </div>
    </>
  );
}
