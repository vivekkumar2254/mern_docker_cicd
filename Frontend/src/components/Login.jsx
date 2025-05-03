import React from 'react';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();

    const location  = useLocation();
  const from = location.state?.form.pathname || '/'

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4000/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Login success...");
          navigate(from,{replace: true});
          window.location.reload();
          // You can also navigate directly instead of reloading
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg relative">
        {/* Back Button */}
       
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign In to Your Account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/home" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} method='dialog'>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email Address */}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...register("email", { required: true })}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Terms and Privacy */}
        <p className="mt-6 text-center text-sm text-gray-600">
          By signing in, you agree to our{' '}
          <Link to="" className="font-medium text-indigo-600 hover:text-indigo-500">
            Terms
          </Link>{' '}
          and{' '}
          <Link to="" className="font-medium text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
