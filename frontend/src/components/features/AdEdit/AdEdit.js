import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Alert from '../Alert/Alert';

const AdEdit = ({ ad }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: ad.title,
    description: ad.description,
    imageUrl: ad.imageUrl,
  });
  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/ads/${ad.id}`, formData);

      if (response.data.success) {
        history.push(`/ads/${ad.id}`);
      } else {
        setAlert({ type: 'danger', message: response.data.message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AdEdit;
