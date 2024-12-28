import './App.css';
import { useState } from 'react';
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
      <div className="resume__section">
        <Resume formData={formData} />
      </div>
    </div>
  );
}

export default App;
