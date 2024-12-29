import './App.css';
import { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';
import Resume from './components/Resume';

function App() {
  const [formData, setFormData] = useState({
    general: {
      name: 'Example Name',
      email: 'example@gmail.com',
      phone: '000-000-0000',
      website: 'github.com/example',
    },
    educational: [
      {
        schoolName: 'School',
        fieldOfStudy: 'Field of Study',
        startYear: 'Start',
        endYear: 'End',
      },
    ],
    practical: [
      {
        companyName: 'Company',
        positionTitle: 'Position',
        mainResponsibilities: 'Description of main job responsibilities, achievements, awards, etc. ',
        startDate: 'Start',
        endDate: 'End',
      },
    ],
  });

  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const options = {
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  };

  const addEducation = () => {
    const newEducation = {
      schoolName: 'Enter school name',
      fieldOfStudy: 'Enter field of study',
      startYear: 'Enter start year',
      endYear: 'Enter end year',
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      educational: [...prevFormData.educational, newEducation],
    }));
  };

  const addPractical = () => {
    const newPractical = {
      companyName: 'Enter company name',
      positionTitle: 'Enter position title',
      mainResponsibilities: 'Enter main responsibilities',
      startDate: 'Enter start date',
      endDate: 'Enter end date',
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      practical: [...prevFormData.practical, newPractical],
    }));
  };

  return (
    <div className="body__container">
      <div className="edit__section">
        <h1>🧱 Resume Builder</h1>
        <General formData={formData.general} setFormData={setFormData} />

        <div className="education__header__section">
          <h2>Educational Information</h2>
          <div>
            <button onClick={addEducation}>➕</button>
          </div>
        </div>
        {formData.educational.map((education, i) => (
          <Educational
            key={i}
            formData={education}
            setFormData={setFormData}
            index={i}
          />
        ))}
     
        <div className="practical__header__section">
          <h2>Work Experience</h2>
          <div>
            <button onClick={addPractical}>➕</button>
          </div>
        </div>
        {formData.practical.map((practical, i) => (
          <Practical
            key={i}
            formData={practical}
            setFormData={setFormData}
            index={i}
          />
        ))}

      </div>

      <div className="resume__section" ref={resumeRef}>
        <Resume formData={formData} />
      </div>

      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
