import React, { useState } from 'react';
import axios from 'axios';

const UpdateRecord = () => {
  const [recordId, setRecordId] = useState('');
  const [record, setRecord] = useState({
    storeId: '',
    sku: '',
    productName: '',
    price: '',
    date: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/pricing/${recordId}`, record);
      setMessage('Record updated successfully');
    } catch (error) {
      setMessage('Error updating record: ' + error.message);
    }
  };
  return (
    <div>
      <h2>Update Record</h2>
      <input placeholder="Record ID" onChange={(e) => setRecordId(e.target.value)} />
      <input name="storeId" placeholder="Store ID" onChange={handleChange} />
      <input name="sku" placeholder="SKU" onChange={handleChange} />
      <input name="productName" placeholder="Product Name" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="date" placeholder="Date (yyyy-MM-dd)" onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
      <p>{message}</p>
    </div>
  );
};

export default UpdateRecord;