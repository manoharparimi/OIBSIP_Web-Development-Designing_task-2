import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sentUserdata = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstName, lastName, email, mobile, message } = inputValue;

    // Validation
    if (!firstName.trim()) {
      toast.error("First name is required");
      setIsSubmitting(false);
      return;
    }
    if (!lastName.trim()) {
      toast.error("Last name is required");
      setIsSubmitting(false);
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      setIsSubmitting(false);
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }
    if (!mobile.trim()) {
      toast.error("Mobile number is required");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          mobile,
          message
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      const data = await res.json();
     
      if (data.status === 201) {
        toast.success("Your response has been submitted successfully!");
        setInputValue({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: ""
        });
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="container mb-3 contact">
       
         <h2 className="text-center">CONTACT <span style={{color:"#AA336A"}}> US </span>  </h2>
        <Form onSubmit={sentUserdata}>
          <Form.Group className="mb-1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={inputValue.firstName}
              onChange={getvalue}
              placeholder="Enter your first name"
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={inputValue.lastName}
              onChange={getvalue}
              placeholder="Enter your last name"
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={inputValue.email}
              onChange={getvalue}
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              name="mobile"
              value={inputValue.mobile}
              onChange={getvalue}
              placeholder="Enter your mobile number"
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={inputValue.message}
              onChange={getvalue}
              placeholder="Enter your message"
              disabled={isSubmitting}
            />
          </Form.Group>

          <Button 
            variant="primary" 
            className='col-lg-1' 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>

        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default Contact;