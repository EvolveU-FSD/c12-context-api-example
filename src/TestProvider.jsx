import { createContext } from 'react';

export const TestContext = createContext();

const TestProvider = (props) => {
  const children = props.children;

  const theValues = { test1: 111, test2: 'hello friends!' };

  return (
    <>
      <h2 style={{ color: 'red' }}>
        TestProvider - populates the TestContext and makes values available to
        descendents
      </h2>
      <div style={{ border: '2px solid red', padding: '10px', color: 'red' }}>

        <TestContext.Provider value={theValues}>
          {children}
        </TestContext.Provider>

      </div>
    </>
  );
};

export default TestProvider;
