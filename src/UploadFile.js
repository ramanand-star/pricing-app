import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    
    try {
        const response = await axios.post('http://localhost:8080/pricing/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setMessage(response.data);
      } catch (error) {
        setMessage('Error uploading file: ' + error.message);
      }
    };
  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default UploadFile;