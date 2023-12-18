// PopupForm.js
import React, { useState } from 'react';
// import './PopupForm.css'; // Apply your custom CSS styles here

const PopupForm = () => {
  const [showForm, setShowForm] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handSubmit = () => {
    setShowForm(false);
    return (
        alert("Thankyou we will get back to you soon")
    )
  }

  return (
    showForm && (
      <div className="popup-form-container">
        <div className="popup-form">
          <button className="close-button" onClick={handleCloseForm}>
            &#x2716;
          </button>

          <form onSubmit={handSubmit} className='form'>
            {/* Your form inputs go here */}
            <h3 className='text-center form-head'>Contact us</h3>
            <input type="text" placeholder="Name" required/>
            <br />
            <input type="email" placeholder="Email" required/>
            <br />
            <input type="text" placeholder='Address' required/>
            <br />
            <textarea type="textarea" placeholder='Message' />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
