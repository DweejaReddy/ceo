import {
  useMutation,
} from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react';
import request from "graphql-request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createFormMutation } from '@/api/graphql/mutation';

interface registerForm {
  name: string;
  email: string;
  phone: string;
  website: string;
  startup: string,
  place: string,
  sector: string,
  alum: boolean,
  description: string,
  consent: boolean;
}

const initRegister: registerForm = {
  name: "",
  email: "",
  phone: "",
  startup: "",
  place: "",
  sector: "",
  alum: false,
  website: "",
  description: "",
  consent: false,
}


const Form = () => {
  const [form, setForm] = useState<registerForm>(initRegister);

  // mutation
  const mutation = useMutation({
    mutationKey: ['createForm'],
    mutationFn: async (regisForm: registerForm) => request("https://expo-backend.vercel.app/api",
      createFormMutation,
      {
        createFormInput: regisForm,
      }),
    onSuccess: async (data: any) => {
      const code = data.createForm.code;
      const message = data.createForm.message;
      if (code == 201) {
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setForm(initRegister);
      window.location.href = "/";
    },
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    mutation.mutate(form);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setForm(pForm => {
    return {
      ...pForm,
      [e.target.name]: e.target.value,
    }
  })

  const handleCustChange = (key: string, value: any) => setForm(pForm => {
    return {
      ...pForm,
      [key]: value,
    }
  })


  return (
    <div className="w-full pb-16 px-4 py-16 bg-white" id="form">
      <h1 className="text-2xl text-[#ff5757] sm:text-3xl font-bold text-center py-4 ">
        Get Started With Registration
      </h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="max-w-[1240px] mt-10 mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <label htmlFor="name" className="text-gray-500 font-bold">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.name && touched.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )} */}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.email && touched.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )} */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-500 font-bold">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.phone && touched.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )} */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="startup" className="text-gray-500 font-bold">
                Name of your Startup*
              </label>
              <input
                type="text"
                name="startup"
                id="startup"
                value={form.startup}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.startup && touched.startup && (
                <p className="text-sm text-red-600">{errors.startup}</p>
              )} */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="place" className="text-gray-500 font-bold">
                Place*
              </label>
              <input
                type="text"
                name="place"
                id="place"
                value={form.place}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.place && touched.place && (
                <p className="text-sm text-red-600">{errors.place}</p>
              )} */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="website" className="text-gray-500 font-bold">
                Website/LinkedIn of your Startup*
              </label>
              <input
                type="text"
                name="website"
                id="website"
                value={form.website}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.website && touched.website && (
                <p className="text-sm text-red-600">{errors.website}</p>
              )} */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="sector" className="text-gray-500 font-bold">
                Sector your Startup belong to*
              </label>
              <input
                type="text"
                name="sector"
                id="sector"
                value={form.sector}
                onChange={handleChange}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {/* {errors.sector && touched.sector && (
                <p className="text-sm text-red-600">{errors.sector}</p>
              )} */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="student" className="text-gray-500 font-bold">
                Are you a VNIT, Nagpur Student/Alumni*
              </label>
              <div className="flex mt-3">
                <label htmlFor="Yes" className="text-gray-500 font-bold mr-5">
                  Yes
                </label>
                <input
                  name="student"
                  id="Yes"
                  checked={true}
                  type="radio"
                  value="yes"
                  onChange={handleChange}
                />
                <label htmlFor="no" className="text-gray-500 font-bold mr-5 ml-8">
                  No
                </label>
                <input
                  name="alum"
                  id="No"
                  type="radio"
                  checked={false}
                  value="No"
                  onChange={(e) => handleCustChange("alum", e.target.checked)}
                />
              </div>
              {/* {errors.student && touched.student && (
                <p className="text-sm text-red-600">{errors.student}</p>
              )} */}
            </div>
          </div>

          <div className="flex flex-col mt-8 col-span-2 gap-0">
            <label htmlFor="description" className="text-gray-500 font-bold">
              Brief description of idea/product/service*
            </label>
            <textarea
              name="description"
              id="description"
              value={form.description}
              onChange={(e) => handleCustChange("description", e.target.value)}
              className="bg-gray-200 h-44 sm:w-[100%] appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          {/* {errors.description && touched.description && (
            <p className="text-sm text-red-600">{errors.description}</p>
          )} */}

          <div className="my-5" >
            <input
              type="checkbox"
              name="consent"
              id="checkbox"
              value={form.consent.toString()}
              onChange={(e) => handleCustChange("consent", e.target.checked)}
            />
            <label htmlFor="consent" className="pl-3">
              I hereby declare that i have read the{" "}
              <a href="#broucher" className="font-bold hover:underline">
                Brochure
              </a>{" "}
              and the details furnished above are correct to best of my
              Knowledge.
            </label>
            {/* {errors.checkbox && touched.checkbox && (
              <p className="text-sm text-red-600">{errors.checkbox}</p>
            )} */}

          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="text-[#ffffff] w-[200px] rounded-md font-medium my-8 mx-auto  py-3 bg-[#000300] hover:scale-105 duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;