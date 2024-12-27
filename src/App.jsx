import './App.css';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

function App() {
  return (
    <div className="body__container">
      <General />
      <Educational />
      <Practical />
    </div>
  );
}

export default App;
