import {
  useMutation,
} from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react';
import request from "graphql-request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createFormMutation } from '@/api/graphql/mutation';
import { useRouter } from 'next/navigation';

interface registerForm {
  name: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  year: string,
  consent: boolean;
}

const initRegister: registerForm = {
  name: "",
  email: "",
  phone: "",
  college: "",
  course: "",
  year: "",
  consent: false,
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const Form = () => {
  const router = useRouter();
  const [form, setForm] = useState<registerForm>(initRegister);

  // mutation
  const mutation = useMutation({
    mutationKey: ['createForm'],
    mutationFn: async (regisForm: registerForm) => request("https://ceo-backend-alpha.vercel.app/api",
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
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setForm(initRegister);
        await delay(1500);
        router.push("https://docs.google.com/forms/d/e/1FAIpQLSeEKgO6vrl0Ybk6Lvmw6_v3cZ59bMuRpP7TekF9YaqxymYZZw/viewform?usp=sf_link");
      } else {
        toast.error(message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(form);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(pForm => {
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
    <div id="form" className='mt-20 mb-10'>
      <div className="w-full text-4xl text-center py-6 text-red-600">
        Register Now
      </div>
      <div className="py-4 flex flex-col justify-center px-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col xl:flex-row gap-4 justify-center">
            <div className="shadow sm:overflow-hidden sm:rounded-md mb-4">
              <div className="px-4 sm:px-0">
                <h3 className="text-md font-medium leading-6 text-purple-400">
                  Participant
                </h3>
                <p className="mt-1 text-sm text-white mb-4">
                  This section contains the personal information of the participants
                </p>
              </div>
              <div className="space-y-6 rounded-md bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-md font-medium text-gray-700"
                    >
                      Full name
                      <span className='text-red-600'>{ }*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={form.name}
                      placeholder="Full Name"
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-md font-medium text-gray-700"
                    >
                      Phone Number
                      <span className='text-red-600'>{ }*</span>
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-md text-gray-500">
                        +91
                      </span>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        maxLength={10}
                        value={form.phone}
                        placeholder="Personal Phone number"
                        onChange={handleChange}
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-md font-medium text-gray-700"
                    >
                      Email
                      <span className='text-red-600'>{ }*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={form.email}
                      placeholder="Personal Email"
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-md font-medium text-gray-700"
                    >
                      College
                      <span className='text-red-600'>{ }*</span>
                    </label>
                    <input
                      type="text"
                      name="college"
                      id="college"
                      required
                      value={form.college}
                      placeholder="College Name"
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="course"
                      className="block text-md font-medium text-gray-700"
                    >
                      Course
                      <span className='text-red-600'>{ }*</span>
                    </label>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      required
                      value={form.course}
                      placeholder="Eg. BTech"
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="year"
                      className="block text-md font-medium text-gray-700"
                    >
                      Year
                      <span className='text-red-600'>{ }*</span>
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">

                      <input
                        type="text"
                        name="year"
                        id="year"
                        required
                        value={form.year}
                        placeholder="Year of Study"
                        onChange={handleChange}
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="my-5 text-white" >
              <input
                type="checkbox"
                name="consent"
                id="checkbox"
                value={form.consent.toString()}
                onChange={(e) => handleCustChange("consent", e.target.checked)}
              />
              <label htmlFor="consent" className="pl-3">
                I hereby declare that i have read the{" "}
                <a href="https://drive.google.com/file/d/1LlRKzo1LM-IMSEBVN6rx2_5NVC_PQ8IP/view?usp=sharing" className="font-black hover:underline underline-offset-4 underline">
                  Brochure
                </a>{" "}
                and the details furnished above are correct to best of my
                Knowledge.
              </label>
            </div>
            <button type="submit" className="w-3/4 md:w-1/4 lg:w-1/6 inline-flex justify-center items-center border border-transparent bg-gradient-to-r from-[#00a4f9] to-[#0164eb] hover:from-[#0164eb] hover:to-[#00a4f9] py-4 px-6 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;