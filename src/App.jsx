import './App.css';
import General from './components/general';
import Educational from './components/Educational';
import Practical from './components/Practical';

function App() {
  return (
    <div className="body__container">
      <h1>🧱 Resume Builder</h1>
      <General />
      <Educational />
      <Practical />
    </div>
  );
}

export default App;
