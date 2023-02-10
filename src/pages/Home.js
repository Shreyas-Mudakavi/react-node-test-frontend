import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import HomeData from "../components/HomeData";

const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  const toastOptions = {
    position: "top-center",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    async function checkUser() {
      const user = await JSON.parse(localStorage.getItem("user"));

      if (!user?.token) {
        navigate("/login");
      } else {
        setCurrentUser(user.token);
      }
    }
    checkUser();
  }, [navigate]);

  useEffect(() => {
    async function checkStatus() {
      const { data } = await axios.get("http://localhost:5000/api/auth/home", {
        headers: { Authorization: "Bearer " + currentUser },
      });

      if (data.status === true) {
        toast.success(data.msg, toastOptions);
      }

      if (data.status === false) {
        navigate("/login");
      }
    }

    if (currentUser) {
      checkStatus();
    }
  }, []);

  return (
    <div className="homeContainer">
      <div>
        {currentUser && (
          <>
            <div className="homeContent">
              <HomeData />
            </div>
            <ToastContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
