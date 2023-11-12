import { TimeoutBatchingDemo } from './components/TimeoutBatchingDemo';
import { EventBatchingDemo } from './components/EventBatchingDemo';
import './style.css';

export const LegacyApp = () => {
  return (
    <div className="legacy-container">
      <h1>React 17 - Automatic batching demo</h1>
      <EventBatchingDemo title="Event handler - Batching" />
      <TimeoutBatchingDemo title="Timeout - No Batching" />
    </div>
  );
};
