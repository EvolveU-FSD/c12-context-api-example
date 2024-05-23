import RestOfApp from './RestOfApp';
import TestProvider from './TestProvider';

function App() {
  return (
    <>
      <h1 style={{ color: 'black' }}>App</h1>
      <div
        style={{ border: '2px solid black', padding: '10px', color: 'black' }}
      >

        <TestProvider>
          <RestOfApp />
        </TestProvider>

      </div>
    </>
  );
}

export default App;
