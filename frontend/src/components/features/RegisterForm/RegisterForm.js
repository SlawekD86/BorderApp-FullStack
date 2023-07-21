import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Alert from '../Alert/Alert';

const RegisterForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);

      if (response.data.success) {
        history.push('/login');
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
