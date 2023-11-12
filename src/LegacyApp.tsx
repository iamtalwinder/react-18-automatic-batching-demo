import { TimeoutBatchingDemo } from './components/TimeoutBatchingDemo';
import { EventBatchingDemo } from './components/EventBatchingDemo';
import './style.css';

export const LegacyApp = () => {
  return (
    <div className="appContainer">
      <h1>React 17 - Automatic batching demo</h1>
      <div>
        <EventBatchingDemo title="Event handler - Batching" />
        <TimeoutBatchingDemo title="Timeout - No Batching" />
      </div>
    </div>
  );
};
