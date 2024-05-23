import RestOfApp from './RestOfApp';
import TestProvider from './TestProvider';

function App() {
  return (
    <TestProvider>
      <RestOfApp />
    </TestProvider>
  );
}

export default App;
