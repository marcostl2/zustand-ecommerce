import { Router } from './routes';

import { Tooltip } from './components/Tooltip';
import { useSettingsStore } from './store';

import './App.css';

function App() {
  const { tooltipIsOpen } = useSettingsStore((state) => state);

  return (
    <div className="App">
      <Router />
      {tooltipIsOpen && <Tooltip />}
    </div>
  );
}

export default App;
