import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from '../assets/logo.png'

const EmployeeLogout = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");

  const handleLogout = () => {
    // Your login logic here
    if (employeeId.trim() === "") {
      toast.error("Please enter Employee ID");
    } else {
      // Assuming login logic is successful
      navigate("/employeesdetails"); // Redirect to employee details page
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0 ">
    <h1 className="text-center text-3xl font-bold cursor-pointer select-none -mt-20">
      <img src={logo} width="200" alt="" className="-mb-10" />
    </h1>
    <div className="text-sm text-gray-500 mb-4 -mt-6 hover:text-gray-300 cursor-pointer select-none">
      TECHNOLOGY AND SERVICES PRIVATE LIMITED
    </div>
    <div className="md:w-96 bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-8">Employee Logout Page 👋</h1>
      <div className="mb-4">
        <label
          htmlFor="employeeId"
          className="block text-sm font-medium mb-2"
        >
          Employee ID
        </label>
        <input
          type="text"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="w-full bg-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Employee ID"
          required
        />
      </div>
      <button
        onClick={handleLogout}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Logout
      </button>
    </div>
  </div>
  );
};

export default EmployeeLogout;