import React, { useState } from 'react';
import Result from './Result'
import './App.css'
import Alert from './Alert';
const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/;

    // Name validation
    if (!formData.name || !nameRegex.test(formData.name)) {
      showAlert('Please enter a valid name', 'danger')
    }

    // Email validation
    else if (!formData.email || !emailRegex.test(formData.email)) {
      showAlert('Please enter a valid email address', 'danger')
    }

    // Phone number validation
    else if (!formData.phoneNumber || !phoneNumberRegex.test(formData.phoneNumber)) {
      showAlert('Please enter a valid phone number', 'danger')
    }

    // City validation
    else if (!formData.city) {
      showAlert('Please enter your city', 'warning')
    }

    // Country validation
    else if (!formData.country) {
      showAlert('Please enter your country', 'warning')
    }


    // Submit the form if no errors
    else {
      // Here, you can perform further actions such as making an API request
      setIsSubmitted(true);

      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <div className='main d-flex'>
        <div className='p'>
          <h1>Form Validation</h1>
          <div className='parent d-flex justify-content-center align-items-center'>

            <form onSubmit={handleSubmit}>

              <div className='form-field'>
                <label htmlFor="name">Name</label><br />
                <input
                  className='input'
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>
              <div className='form-field'>
                <label htmlFor="email">Email</label><br />
                <input
                  className='input'
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>
              <div className='form-field'>
                <label htmlFor="phoneNumber">Phone Number</label><br />
                <input

                  className='input'
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className='form-field'>
                <label htmlFor="city">City</label><br />
                <input
                  className='input'
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />

              </div>
              <div className='form-field'>
                <label htmlFor="country">Country</label><br />
                <input
                  className='input'
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />

              </div>
              <div className='form-field text-center'>
                <button className='btn btn-danger' type="submit">Submit</button>
              </div>

            </form>

          </div>
        </div>

        {isSubmitted &&
          <>
            <div className='vr '></div>
            <div className='p'>
              <Result formData={formData} />
            </div>
          </>
        }

      </div>
    </>
  );
};

export default App;
