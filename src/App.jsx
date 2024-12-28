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
      name: 'Jane Smith',
      email: 'jane@gmail.com',
      phone: '000-000-0000',
      website: 'github.com/jane',
    },
    educational: {
      schoolName: 'UGA',
      fieldOfStudy: 'Biology',
      startYear: '2010',
      endYear: 'Present',
    },
    practical: {
      companyName: 'Wal-Mart',
      positionTitle: 'CEO',
      mainResponsibilities: 'Running the world, Taking names',
      startDate: 'Enter start date',
      endDate: 'Enter end date',
    },
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

  return (
    <div className="body__container">
      <div className="edit__section">
        <h1>🧱 Builder</h1>
        <General formData={formData.general} setFormData={setFormData} />
        <Educational
          formData={formData.educational}
          setFormData={setFormData}
        />
        <Practical formData={formData.practical} setFormData={setFormData} />
      </div>

      <div className="resume__section" ref={resumeRef}>
        <Resume formData={formData} />
      </div>

      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
