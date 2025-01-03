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

        {formData.educational.map((education, i) => (
          <div className="school__container" key={i}>
            <h3>{education.schoolName}</h3>
            <div className="school__info">
              <div>
                <p className="field__of__study">{education.fieldOfStudy}</p>
              </div>
              <div>
                <p className="graduation__years">
                  {education.startYear} – {education.endYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Information Section */}
      <div className="experience__container">
        <h2>Work Experience</h2>

        {formData.practical.map((practical, i) => (
          <div className="practical__container" key={i}>
            <div className="practical__header">
              <div>
                <h3>
                  {practical.positionTitle}: {practical.companyName}
                </h3>
              </div>
              <div>
                <p>
                  {practical.startDate}–{practical.endDate}
                </p>
              </div>
            </div>
            <div className="practical__info">
              <p>{practical.mainResponsibilities}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
