import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoMdContact } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    name: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { name, password, birthday, email, confirmPassword } = values;

    if (name === "") {
      toast.error("Username is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password is required.", toastOptions);
      return false;
    } else if (birthday === "") {
      toast.error("Please select date of birth.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (confirmPassword === "") {
      toast.error("All fields are required.", toastOptions);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords don't match", toastOptions);
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (handleValidation()) {
        const { name, password, birthday, email } = values;
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            password,
            birthday,
            email,
          }
        );

        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }

        if (data.status === true) {
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.response.data.msg, toastOptions);
    }
  };

  const changeMode = () => {
    navigate("/login");
  };

  return (
    <div className="registerContainer">
      <div className="headingRegister">SIGN UP</div>
      {/* <div className="contactIcon">
        <IoMdContact />
      </div> */}
      <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
          <div className="formFields">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <IoMdContact />
              </InputGroup.Text>
              <Form.Control
                name="name"
                placeholder="username"
                type="text"
                onChange={handleChange}
                autoComplete="off"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <FaBirthdayCake />
              </InputGroup.Text>
              <Form.Control
                name="birthday"
                type="date"
                placeholder="date of birth"
                onChange={handleChange}
                autoComplete="off"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <MdEmail />
              </InputGroup.Text>
              <Form.Control
                name="email"
                placeholder="email"
                type="email"
                autoComplete="off"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <RiLockPasswordFill />
              </InputGroup.Text>
              <Form.Control
                placeholder="password"
                type="password"
                name="password"
                onChange={handleChange}
                autoComplete="off"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <RiLockPasswordFill />
              </InputGroup.Text>
              <Form.Control
                placeholder="confirm password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                autoComplete="off"
              />
            </InputGroup>

            <div className="submitBtn">
              <button type="submit">REGISTER</button>
            </div>
          </div>
        </form>

        <div className="form-account">
          <p>
            Already have an account?
            <span onClick={changeMode}> Sign In </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
