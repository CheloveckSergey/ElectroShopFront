import './App.css';
import './styles/css/styles.css';
import LeftPanel from './components/leftPanel/LeftPanel';
import Main from './components/Main';
import RightPanel from './components/rightPanel/RightPanel';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Main />
      <RightPanel />
    </div>
  );
}

export default App;
