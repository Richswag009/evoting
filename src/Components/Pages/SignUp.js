import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Navbar from "../Navbar/Navbar";
import { baseUrl, config } from "../../utils/Fetchapi";

const SignUp = () => {
  const navigate = useNavigate();
  // const [isLogin, setIsLogin] = useState();
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [state, setState] = useState("");
  const [dob, setDob] = useState("");
  const [pvc, setPvc] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirm_password] = useState("");
  // const [error, setErrors] = useState(false);
  const schema = yup.object().shape({
    fullname: yup.string().required().min(6),
    email: yup.string().required("please enter a valid email"),
    password: yup
      .string()
      .required("please enter passw0rd")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const submitHandler = (data) => console.log(data);

  const submitHandler = async () => {
    // e.preventDefault();

    try {
      const response = await axios.post(
        baseUrl() + "register",
        {
          name: name,
          email: email,
          nationality: nationality,
          state: state,
          dob: dob,
          pvc: pvc,
          password: password,
          password_confirmation: password_confirmation,
        },
        config
      );
      // const data = await response.json();
      console.log(response.data);
      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      // setErrors();
    }
  };
  return (
    <div className="h-[74vh] bg-gradient-to-r from-[#336c80] to-[#002531] ">
      <form
        onSubmit={handleSubmit(submitHandler)}
        action=""
        method="POST"
        className=" bg-white rounded-lg px-4 max-w-lg border-2 shadow-md mx-auto mt-10"
      >
        <h1 className="text--[#008751] text-center text-3xl my-3">
          Sign up for Free
        </h1>
        <div className="my-2">
          <label htmlFor="fullname">Full Name</label>
          <input
            {...register("fullname")}
            type="text"
            name="fullname"
            value={name}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setFullName(e.target.value)}
          />
          <span className="message text-red-600 text-lg font-medium">
            {errors.fullname && (
              <p>
                fullname is required. <sup>*</sup>
              </p>
            )}
          </span>{" "}
        </div>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="text"
            name="email"
            value={email}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="message text-red-600 text-lg font-medium">
            {errors.email && (
              <p>
                email is required. <sup>*</sup>
              </p>
            )}
          </span>{" "}
        </div>
        <div className="my-2">
          <label htmlFor="country">Nationality</label>
          <input
            {...register("country")}
            type="text"
            value={nationality}
            name="country"
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setNationality(e.target.value)}
          />
          <span className="message text-red-600 text-lg font-medium">
            {errors.country && (
              <p>
                Country is required. <sup>*</sup>
              </p>
            )}
          </span>{" "}
        </div>
        <div className="my-2">
          <label htmlFor="state">State of Origin</label>
          <input
            {...register("state")}
            type="text"
            name="state"
            value={state}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setState(e.target.value)}
          />
          <span className="message text-red-600 text-lg font-medium">
            {errors.state && (
              <p>
                state is required. <sup>*</sup>
              </p>
            )}
          </span>{" "}
        </div>
        <div className="my-2">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            {...register("dob")}
            type="date"
            name="dob"
            value={dob}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setDob(e.target.value)}
          />
          <span className="message text-red-600 text-lg font-medium">
            {errors.dob && (
              <p>
                Date of Birth is required. <sup>*</sup>
              </p>
            )}
          </span>{" "}
        </div>
        <div className="my-2">
          <label htmlFor="fullname">PVC Number</label>
          <input
            {...register("pvc")}
            type="number"
            name="pvc"
            value={pvc}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setPvc(e.target.value)}
          />
          <span className="message text-red-600 text-lg font-medium">
            {errors.pvc && (
              <p>
                pvc is required. <sup>*</sup>
              </p>
            )}
          </span>{" "}
        </div>
        <div className="my-2">
          <label htmlFor="fullname">Password</label>
          <input
            {...register("password")}
            type="password"
            name="password"
            value={password}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-red-800">{errors["password"]?.message}</span>
        </div>
        <div className="my-2">
          <label htmlFor="fullname">Confirm Password</label>
          <input
            {...register("confirm_password")}
            type="password"
            name="confirm_password"
            value={password_confirmation}
            className="h-[40px] w-full border p-3 my-1"
            onChange={(e) => setConfirm_password(e.target.value)}
          />
          {/* <span className="message text-red-600 text-lg font-medium">
            {errors[item.name] && (
              <p>
                {item.label} is required. <sup>*</sup>
              </p>
            )}
          </span>{" "} */}
        </div>

        <button className="px-3 text-white text-xl tracking-wildest py-3 bg-[#008751] rounded-lg w-full my-4 border">
          {" "}
          Register
        </button>
        <p className="mb-3">
          have an account already?? <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
