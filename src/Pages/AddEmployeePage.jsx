import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slices/employeeSlice";
import { collection, addDoc } from "firebase/firestore";
import fireDB from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const AddEmployeePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [employeeDetails, setEmployeeDetails] = useState({
    employeeName: "",
    bankName: "",
    gender: "",
    bankBranch: "",
    contactNumber: "",
    ifcCode: "",
    employeePost: "",
    accountNumber: "",
    aadhaarNumber: "",
    panNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(
        collection(fireDB, "employees"),
        employeeDetails
      );
      dispatch(addEmployee({ ...employeeDetails, id: docRef.id }));
      navigate("/employeedetails");
      toast.success("Employee Data Added");
      setEmployeeDetails({
        employeeName: "",
        bankName: "",
        gender: "",
        bankBranch: "",
        contactNumber: "",
        ifcCode: "",
        employeePost: "",
        accountNumber: "",
        aadhaarNumber: "",
        panNumber: "",
      });
    } catch (error) {
      console.error("Error adding employee: ", error);
      toast.error("Failed to add employee. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-3 px-4">
        <h1 className="text-3xl font-bold text-center mb-5 select-none cursor-pointer">
          Employee Details
        </h1>
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid md:grid-cols-2 gap-4 justify-items-center ">
              <div>
                <label
                  htmlFor="employeeName"
                  className="block text-sm font-medium mb-2"
                >
                  Employee Name
                </label>
                <input
                  type="text"
                  id="employeeName"
                  name="employeeName"
                  value={employeeDetails.employeeName}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter employee name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="bankName"
                  className="block text-sm font-medium mb-2"
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={employeeDetails.bankName}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter bank name"
                  required
                />
              </div>
            </div>
            <div className="mb-4 grid md:grid-cols-2 gap-4 justify-items-center">
              <div>
                <label
                  htmlFor="Gender"
                  className="block text-sm font-medium mb-2"
                >
                  Gender
                </label>
                <input
                  type="text"
                  id="Gender"
                  name="Gender"
                  value={employeeDetails.Gender}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter Gender"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="bankbranch"
                  className="block text-sm font-medium mb-2"
                >
                  Bank Branch
                </label>
                <input
                  type="text"
                  id="bankbranch"
                  name="bankbranch"
                  value={employeeDetails.bankbranch}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter Bank Branch"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={employeeDetails.contactNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter contact number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="ifccode"
                  className="block text-sm font-medium mb-2"
                >
                  IFC Code
                </label>
                <input
                  type="text"
                  id="ifccode"
                  name="ifccode"
                  value={employeeDetails.ifccode}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter IFC Code"
                  required
                />
              </div>
            </div>
            <div className="mb-4 grid md:grid-cols-2 gap-4 justify-items-center">
              <div>
                <label
                  htmlFor="employeePost"
                  className="block text-sm font-medium mb-2"
                >
                  Employee Post
                </label>
                <input
                  type="text"
                  id="employeePost"
                  name="employeePost"
                  value={employeeDetails.employeePost}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter employee post"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="accountNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={employeeDetails.accountNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter Account number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="aadhaarNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={employeeDetails.aadhaarNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter Aadhaar number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="panNumber"
                  className="block text-sm font-medium mb-2"
                >
                  PAN Number
                </label>
                <input
                  type="text"
                  id="panNumber"
                  name="panNumber"
                  value={employeeDetails.panNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
                  placeholder="Enter PAN number"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting} // Disable button when submitting
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddEmployeePage;
