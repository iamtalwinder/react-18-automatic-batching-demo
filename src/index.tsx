import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { LegacyApp } from './LegacyApp';
import { App } from './App';

// Render with React 18 createRoot
const root = createRoot(document.getElementById('react18'));
root.render(<App />);

// Render with React 17-like ReactDOM.render
ReactDOM.render(<LegacyApp />, document.getElementById('legacy'));
