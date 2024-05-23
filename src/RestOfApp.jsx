import { useContext } from 'react';
import { TestContext } from './TestProvider';

const RestOfApp = () => {
  const testValues = useContext(TestContext);

  return (
    <div>
      <h2>RestOfApp</h2>
      <ul>
        <li>Test1: {testValues.test1}</li>
        <li>Test2: {testValues.test2}</li>
      </ul>
    </div>
  );
};

export default RestOfApp;
