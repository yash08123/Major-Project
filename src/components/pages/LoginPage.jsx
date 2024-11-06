import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
        email: formData.email,
        password: formData.pass,
      });
      console.log(response.data); // You can handle success response here
      console.log("Login");
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center  bg-Blue min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("Hero_bg.png")' }}>
        <div className="flex-1 flex justify-center  items-start pr-24 pb-24">
          <img src="loginimage.png" alt="Hero" className="w-36 h-auto" />
        </div>
        <div className="flex-1 max-w-md mx-auto p-8 bg-base-300 border border-gray-300 rounded-lg shadow-lg mr-36">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Login</h2>
          {error && <div className="alert alert-error shadow-lg mb-4">
            <div>
              <span>{error}</span>
            </div>
          </div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="pass" className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                id="pass"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don&apos;t have an account? <a href="/signup" className="link link-primary">Sign up here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
