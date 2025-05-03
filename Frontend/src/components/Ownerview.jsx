import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Ownerview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload

    if (password === "123") {
      const from = location.state?.from?.pathname || '/'; // Check for redirect path, default is '/'
      navigate(from); // Redirect to home or other route
    } else {
    toast.error("wrong password")
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Enter Owner Password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="password" className="text-gray-700 font-semibold">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="border border-gray-300 rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3C6.13 3 2.732 5.432 1.057 9c1.675 3.568 5.074 6 8.943 6s7.268-2.432 8.943-6C17.268 5.432 13.87 3 10 3zm0 2c2.635 0 5.05 1.484 6.315 3.743C15.049 11.517 12.635 13 10 13s-5.05-1.483-6.315-3.743C4.95 6.484 7.365 5 10 5zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.707 3.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-1.794-1.794a8.046 8.046 0 01-4.913 1.387C5.482 15.757 2.537 13.55 1.07 9c1.196-2.865 3.306-4.788 5.9-5.472L4.293 3.293a1 1 0 010-1.414zM7.22 9.22a3 3 0 014.56-.22L7.22 9.22zm5.559 3.328l-3.88-3.88a3 3 0 013.88 3.88z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-md py-2 mt-4 hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ownerview;
