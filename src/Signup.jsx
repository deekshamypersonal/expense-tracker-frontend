// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import "./index.css";
// // import "./App.css";

// // function Signup() {
// //   const [formData, setFormData] = useState({
// //     identifier: "",
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //   });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     axios
// //       .post("http://localhost:8080/register", formData)
// //       .then((response) => {
// //         navigate("/login");
// //       })
// //       .catch((error) => {
// //         console.error("There was an error!", error);
// //       });
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-blue-800 m-0">
// //       <h1 className="text-4xl font-bold text-white mb-6 mx-8">
// //         Monthly Expense Tracker
// //       </h1>
// //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-8">
// //         <h2 className="text-2xl font-bold text-center mb-6 underline text-purple-700">
// //           Sign Up
// //         </h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
// //             <span className="mx-3 text-gray-400">👤</span>
// //             <input
// //               type="text"
// //               name="identifier"
// //               placeholder="Identifier"
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border-0 focus:outline-none"
// //             />
// //           </div>
// //           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
// //             <span className="mx-3 text-gray-400">👤</span>
// //             <input
// //               type="text"
// //               name="firstName"
// //               placeholder="First Name"
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border-0 focus:outline-none"
// //             />
// //           </div>
// //           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
// //             <span className="mx-3 text-gray-400">👤</span>
// //             <input
// //               type="text"
// //               name="lastName"
// //               placeholder="Last Name"
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border-0 focus:outline-none"
// //             />
// //           </div>
// //           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
// //             <span className="mx-3 text-gray-400">@</span>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border-0 focus:outline-none"
// //             />
// //           </div>
// //           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
// //             <span className="mx-3 text-gray-400">🔒</span>
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border-0 focus:outline-none"
// //             />
// //           </div>
// //           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
// //             <button
// //               type="submit"
// //               className="w-full sm:w-auto bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-200"
// //             >
// //               Sign Up
// //             </button>
// //             <button
// //               type="button"
// //               onClick={() => navigate("/login")}
// //               className="w-full sm:w-auto bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
// //             >
// //               Login
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;

// //-------------------------------------------------------

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./index.css";
// import "./App.css";

// function Signup() {
//   const navigate = useNavigate();

//   // Instead of actually signing up, we simply show a message and direct them to Login
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // alert(
//     //   "Signup not available in demo. Please login as demo user: demouser / demo"
//     // );
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-blue-800 m-0">
//       <h1 className="text-4xl font-bold text-white mb-6 mx-8">
//         Monthly Expense Tracker
//       </h1>
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-8">
//         <h2 className="text-2xl font-bold text-center mb-6 underline text-purple-700">
//           Sign Up (Demo Disabled)
//         </h2>
//         <p className="text-center text-red-500 mb-4">
//           Signup not valid for this demo. Please login using demo user.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* These fields won't actually do anything in demo */}
//           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
//             <span className="mx-3 text-gray-400">👤</span>
//             <input
//               type="text"
//               name="identifier"
//               placeholder="Identifier"
//               disabled
//               className="w-full px-4 py-2 border-0 focus:outline-none bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
//             <span className="mx-3 text-gray-400">👤</span>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               disabled
//               className="w-full px-4 py-2 border-0 focus:outline-none bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
//             <span className="mx-3 text-gray-400">👤</span>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               disabled
//               className="w-full px-4 py-2 border-0 focus:outline-none bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
//             <span className="mx-3 text-gray-400">@</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               disabled
//               className="w-full px-4 py-2 border-0 focus:outline-none bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
//             <span className="mx-3 text-gray-400">🔒</span>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               disabled
//               className="w-full px-4 py-2 border-0 focus:outline-none bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button
//               type="submit"
//               className="w-full sm:w-auto bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-200"
//             >
//               Go to Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

//-----------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";

function Signup() {
  const [formData, setFormData] = useState({
    identifier: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Signup not allowed. Please go to the login page and use the demo credentials"
    );
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-blue-800 m-0">
      <h1 className="text-4xl font-bold text-white mb-6 mx-8">
        Monthly Expense Tracker
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-8">
        <h2 className="text-2xl font-bold text-center mb-6 underline text-purple-700">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
            <span className="mx-3 text-gray-400">👤</span>
            <input
              type="text"
              name="identifier"
              placeholder="Identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full px-4 py-2 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
            <span className="mx-3 text-gray-400">👤</span>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
            <span className="mx-3 text-gray-400">👤</span>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
            <span className="mx-3 text-gray-400">@</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-0 focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
            <span className="mx-3 text-gray-400">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border-0 focus:outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-200"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Go to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
