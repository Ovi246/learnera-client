import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { ErrorMessage } from "@hookform/error-message";
import useTitle from "../hooks/useTitle";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const password = useRef();
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        toast.error(error.code);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="">
      <div className="flex flex-col items-center min-h-[500px] sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Learnera.</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register("email", {
                    required: "This is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email.",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        *{message}
                      </p>
                    ))
                  }
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  ref={password}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register("password", {
                    required: "This is required.",
                    minLength: {
                      value: 6,
                      message: "Minimum length is 6.",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type} className="text-red-500">
                        *{message}
                      </p>
                    ))
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/register"
              >
                Signup Today
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={handleSubmit(onSubmit)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
