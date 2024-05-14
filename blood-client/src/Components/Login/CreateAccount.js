import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const CreateAccount = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
      const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] =
      useSignInWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [bloodGroup,setBloodGroup]=useState('')

  let from = location.state?.from?.pathname || "/";

  let signInError;
  if (gUser) {
    navigate("/");
  }

  const createDBUser = (name, email, img, address,phone) => {
  
const image = img[0];
 const formData = new FormData();
 formData.append('image', image);
 const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
 fetch(url, {
   method: 'POST',
   body: formData,
 })
   .then(res => res.json())
   .then(imageData => {
     const image = imageData.data.url;
     const changeUrl = { name, email, img: image, address ,bloodGroup, phone};
     
     console.log(changeUrl);
     fetch(`http://localhost:5000/create-user/${email}`, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(changeUrl),
     })
       .then(res => res.json())
       .then(data => {
        toast.success('Updated profile');
          reset();
         navigate('/');
       });
   });

  };

  const onSubmit =async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    // await signInWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
     createDBUser(data.name, data.email, data.img, data.address,data.phone);
    // toast.success("Updated profile");
    // navigate("/");
  };
  return (
    <div className="flex justify-center h-screen bg-slate-900 pt-[60px]">
      <div className="flex h-screen justify-center items-center  ">
        <div className="card w-[700px] shadow-xl bg-slate-600">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-5">
                <div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered bg-slate-900 w-full max-w-xs"
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Name is Required',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.name?.type === 'required' && (
                        <span className="label-text-alt text-red-300">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered bg-sla w-full max-w-xs"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Email is Required',
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Provide a valid Email',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === 'required' && (
                        <span className="label-text-alt text-red-300">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <span className="label-text-alt text-red-300">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* phone */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      className="input input-bordered bg-slate-900 w-full max-w-xs"
                      {...register('phone', {
                        required: {
                          value: true,
                          message: 'Phone is Required',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.phone?.type === 'required' && (
                        <span className="label-text-alt text-red-300">
                          {errors.phone.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* image */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      type="file"
                      placeholder="Your Image"
                      className="input input-bordered bg-slate-900 w-full max-w-xs pt-2"
                      {...register('img', {
                        required: {
                          value: true,
                          message: 'Image is Required',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.img?.type === 'required' && (
                        <span className="label-text-alt text-red-300">
                          {errors.img.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Blood Group</span>
                    </label>
                    <select
                      onClick={e => setBloodGroup(e.target.value)}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        Blood Group
                      </option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>
                  <div className="form-control w-full max-w-xs mt-[15px]">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="input input-bordered bg-slate-900 w-[300px] max-w-xs "
                      {...register('address', {
                        required: {
                          value: true,
                          message: 'Address is Required',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.address?.type === 'required' && (
                        <span className="label-text-alt text-red-300">
                          {errors.address.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered bg-slate-900 w-full max-w-xs"
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Password is Required',
                        },
                        minLength: {
                          value: 6,
                          message: 'Must be 6 characters or longer',
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === 'required' && (
                        <span className="label-text-alt text-red-300">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === 'minLength' && (
                        <span className="label-text-alt text-red-300">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              {signInError}
              {bloodGroup ? (
                <input
                  className="btn btn-primary w-full text-white"
                  type="submit"
                  value="Sign Up"
                />
              ) : (
                <input
                  disabled
                  className="btn btn-primary w-full text-white"
                  type="submit"
                  value="Sign Up"
                />
              )}
            </form>
            <p>
              <small>
                Already Have an Account ?{' '}
                <Link to="/login" className="text-orange-600 font-bold">
                  Please Login
                </Link>
              </small>
            </p>
            {/* <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline font-black bg-orange-600 text-white"
            >
              Continue With Google
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
