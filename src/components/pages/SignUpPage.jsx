import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar.jsx";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    student_name: "",
    pass: "",
    email: "",
    dob: "",
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/user/",
        formData
      );
      console.log(response.data);
      const redirectTimeout = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(redirectTimeout);
    } catch (error) {
      console.error("Error:", error);
      setAlert("There was an issue with the signup. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center min-h-screen bg-Blue bg-cover bg-center" style={{ backgroundImage: 'url("Hero_bg.png")' }}>
        <div className="flex-1 flex justify-center items-start pr-24 pb-24">
          <img src="Signupimg.png" alt="Hero" className=" w-44 h-auto" />
        </div>
        <div className="flex-1 max-w-md mx-auto p-8 bg-base-300 border border-gray-300 rounded-lg shadow-lg mr-36">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
          {alert && <div className="alert alert-error shadow-lg mb-4">
            <div>
              <span>{alert}</span>
            </div>
          </div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="student_name" className="label">
                <span className="label-text"> Name:</span>
              </label>
              <input
                type="text"
                id="student_name"
                name="student_name"
                value={formData.student_name}
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
              <label htmlFor="dob" className="label">
                <span className="label-text">Date of Birth:</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account? <a href="login" className="link link-primary">Click here to login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
