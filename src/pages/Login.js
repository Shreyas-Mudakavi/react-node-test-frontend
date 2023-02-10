import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoMdContact } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { name, password } = values;

    if (name === "") {
      toast.error("Username or password is incorrect.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Username or password is incorrect.", toastOptions);
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (handleValidation()) {
        const { name, password } = values;

        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          { name, password }
        );

        // console.log(JSON.stringify(daa));
        if (data.data === false) {
          toast.error(data.msg, toastOptions);
        }

        if (data.data === true) {
          localStorage.setItem("user", JSON.stringify(data));

          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.response.data.msg, toastOptions);
    }
  };

  const changeMode = () => {
    navigate("/register");
  };

  return (
    <div className="registerContainer">
      <div className="headingLogin">SIGN IN</div>
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

            <div className="submitBtn">
              <button type="submit">LOGIN</button>
            </div>
          </div>
        </form>

        <div className="form-account">
          <p>
            Don't have an account?
            <span onClick={changeMode}> Sign Up </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
