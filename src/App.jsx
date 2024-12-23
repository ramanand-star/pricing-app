import React from 'react';
import UploadFile from './UploadFile';
import SearchRecords from './SearchRecords';
import UpdateRecord from './UpdateRecord';

const App = () => {
  return (
    <div>
      <h1>Pricing Records Management</h1>
      <UploadFile />
      <SearchRecords />
      <UpdateRecord />
    </div>
  );
};

export default App;