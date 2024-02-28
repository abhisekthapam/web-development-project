import { useState } from "react";
import { Link } from "react-router-dom";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import axios from "axios";

const TheRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.fullName === "" ||
      formData.address === "" ||
      formData.email === "" ||
      formData.phoneNumber === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setError("All fields are required.");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      console.log("Response from server:", response.data);

      setFormData({
        fullName: "",
        address: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-[88vh] flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full sm:w-96"
      >
        <p className="text-xl font-bold mb-4 text-center primary-color">
          Create Tokri Acoount
        </p>
        {error && (
          <div className="mb-4 text-red-500 text-xs text-center">{error}</div>
        )}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-xs font-medium text-gray-700"
          >
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-xs p-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-xs font-medium text-gray-700"
          >
            Address*
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-xs p-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-xs p-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-xs font-medium text-gray-700"
          >
            Phone Number*
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-xs p-1"
          />
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-700"
          >
            Password*
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-xs p-1 pr-10"
          />
          {showPassword ? (
            <PiEyeThin
              className="absolute right-2 top-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <PiEyeSlashThin
              className="absolute right-2 top-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="confirmPassword"
            className="block text-xs font-medium text-gray-700"
          >
            Confirm Password*
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-xs p-1 pr-10"
          />
          {showConfirmPassword ? (
            <PiEyeThin
              className="absolute right-2 top-2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <PiEyeSlashThin
              className="absolute right-2 top-2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
        </div>
        <div className="flex justify-center mb-4">
          <button
            type="submit"
            className="primary-color px-4 py-2 rounded text-xs border border-purple-400 hover:bg-purple-100 hover:brightness-110"
          >
            Sign Up
          </button>
        </div>
        <div className="text-xs flex justify-center">
          <p>
            Already have an account ?{" "}
            <Link to="/login">
              <span className="primary-color hover:brightness-110">Login</span>
            </Link>
          </p>
        </div>
      </form>
      </div>
  );
};

export default TheRegistration;
