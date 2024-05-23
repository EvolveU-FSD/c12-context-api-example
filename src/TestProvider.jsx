import { createContext } from 'react';

export const TestContext = createContext();

const TestProvider = (props) => {
  const children = props.children;

  const theValues = { test1: 111, test2: 'hello friends!' };

  return (
    <TestContext.Provider value={theValues}>{children}</TestContext.Provider>
  );
};

export default TestProvider;
