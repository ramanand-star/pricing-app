import React, { useState } from 'react';
import axios from 'axios';

const SearchRecords = () => {
  const [searchParams, setSearchParams] = useState({
    storeId: '',
    sku: '',
    productName: '',
    date: '',
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/pricing/search', { params: searchParams });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching records:', error);
    }
  };
  return (
    <div>
      <h2>Search Records</h2>
      <input name="storeId" placeholder="Store ID" onChange={handleChange} />
      <input name="sku" placeholder="SKU" onChange={handleChange} />
      <input name="productName" placeholder="Product Name" onChange={handleChange} />
      <input name="date" placeholder="Date (yyyy-MM-dd)" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((record) => (
          <li key={record.id}>{record.productName} - {record.price}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchRecords;