import { FlushSyncDemo } from './components/FlushSyncDemo';
import { EventBatchingDemo } from './components/EventBatchingDemo';
import { TimeoutBatchingDemo } from './components/TimeoutBatchingDemo';
import './style.css';

export const App = () => {
  return (
    <div>
      <h1>React 18 - Automatic batching demo</h1>
      <EventBatchingDemo title="Event handler - Batching" />
      <TimeoutBatchingDemo title="Timeout - Batching" />
      <FlushSyncDemo title="FlushSync - No Batching" />
    </div>
  );
};
