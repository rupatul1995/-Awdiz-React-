import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = (event) => {
      event.preventDefault();
      // Check for form errors
      const errors = validateForm();
      if (Object.keys(errors).length === 0) {
        // No errors, submit the form
        console.log(formData);
      } else {
        // Set the form errors
        setFormErrors(errors);
      }
    };
    const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
    const validateForm = () => {
      let errors = {};
      if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      if (!formData.message.trim()) {
        errors.message = 'Message is required';
      }
      return errors;
    };
    return (
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <br/>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />   <br/>
          {formErrors.firstName && <div className="error">{formErrors.firstName}</div>}
        </label>
        <br />
        <label>
          Last Name: <br/>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />   <br/>
          {formErrors.lastName && <div className="error">{formErrors.lastName}</div>}
        </label>
        <br />
        <label>
          Email: <br/>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />   <br/>
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </label>
        <br />
       
       
        <button type="submit">Submit</button>
      </form>
    );
  }
  export default ContactForm;
  