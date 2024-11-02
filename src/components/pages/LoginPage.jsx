import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar.jsx";
// import { useDispatch } from "react-redux";
// import { login } from "../features/auth/authSlice.js";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const dispatch = useDispatch();
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
      // dispatch(login(response.data));
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
        // toast.error("Invalid credentials. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
        // toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={styles.pageContainer}>
        <div style={styles.imageContainer}>
          <img src="Loginside.png" alt="Hero" style={styles.image} />
        </div>
        <div style={styles.container}>
          <h2 style={styles.title}>Login</h2>
          {error && <div style={styles.alert}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email:
              </label>
              <input
                type="email"
                style={styles.input}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="pass" style={styles.label}>
                Password:
              </label>
              <input
                type="password"
                style={styles.input}
                id="pass"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
          <p style={styles.signupText}>
            Don&apos;t have an account? <a href="signup">Sign up here</a>
          </p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "center",
    backgroundImage: 'url("Hero_bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: "100px",
    paddingBottom: "90px",
    // marginRight: '90px', // Adjusted marginLeft
  },
  image: {
    width: "400px",
    height: "auto",
  },
  container: {
    flex: "1",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#FFDE9B",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginRight: "140px", // Adjusted marginLeft
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#000",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center", // Center content horizontally
    marginTop: "10px", // Move the button up slightly
  },
  button: {
    width: "100%", // Set button width to 100% of its container
    backgroundColor: "#332c1f",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  alert: {
    marginTop: "15px",
    backgroundColor: "#ff0000",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  signupText: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default LoginPage;
