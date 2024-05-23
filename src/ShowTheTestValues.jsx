import { useContext } from 'react';
import { TestContext } from './TestProvider';

const ShowTheTestValues = () => {
  const testValues = useContext(TestContext);
  return (
    <>
      <h3 style={{ color: 'blue' }}>ShowTheTestValues - using TestContext</h3>
      <div style={{ border: '2px solid blue', padding: '10px', color: 'blue' }}>

        <ul>
          <li>Test1: {testValues.test1}</li>
          <li>Test2: {testValues.test2}</li>
        </ul>

      </div>
    </>
  );
};

export default ShowTheTestValues;
