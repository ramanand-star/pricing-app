import React from 'react';
import UploadFile from './UploadFile';
import SearchRecords from './SearchRecords';
import UpdateRecord from './UpdateRecord';
import './App.css';

// const App = () => {
//   return (
//     <div>
//       <h1>Pricing Records Management</h1>
//       <UploadFile />
//       <SearchRecords />
//       <UpdateRecord />
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <h1 className="title">Pricing Records Management</h1>
      <p>This is a sample application.</p>
         <UploadFile />
         <SearchRecords />
         <UpdateRecord />
    </div>
  );
};

export default App;