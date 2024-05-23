import ShowTheTestValues from './ShowTheTestValues';

const RestOfApp = () => {
  return (
    <>
      <h2 style={{ color: 'green' }}>
        RestOfApp - not using TestContext at all
      </h2>
      <div
        style={{ border: '2px solid green', padding: '10px', color: 'green' }}
      >

        <ShowTheTestValues />

      </div>
    </>
  );
};

export default RestOfApp;
