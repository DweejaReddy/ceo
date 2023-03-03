
import { useFormik } from "formik";
import { formschema } from "./schema";

const initialValues = {
  name: "",
  email: "",
  ph_no: "",
  startup_name: "",
  place: "",
  website: "",
  sector: "",
  student: "",
  description: "",
  checkbox: "",
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formschema,
      onSubmit: (values: any, action: { resetForm: () => void; }) => {
        window.confirm("Congratulations you have been registered Sucessfully!!");
        action.resetForm();
      },
    });

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
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.name && touched.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="ph_no" className="text-gray-500 font-bold">
                Phone Number*
              </label>
              <input
                type="tel"
                name="ph_no"
                id="ph_no"
                value={values.ph_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.ph_no && touched.ph_no && (
                <p className="text-sm text-red-600">{errors.ph_no}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="startup_name" className="text-gray-500 font-bold">
                Name of your Startup*
              </label>
              <input
                type="text"
                name="startup_name"
                id="startup_name"
                value={values.startup_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.startup_name && touched.startup_name && (
                <p className="text-sm text-red-600">{errors.startup_name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="place" className="text-gray-500 font-bold">
                Place*
              </label>
              <input
                type="text"
                name="place"
                id="place"
                value={values.place}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.place && touched.place && (
                <p className="text-sm text-red-600">{errors.place}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="website" className="text-gray-500 font-bold">
                Website/LinkedIn of your Startup*
              </label>
              <input
                type="text"
                name="website"
                id="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.website && touched.website && (
                <p className="text-sm text-red-600">{errors.website}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="sector" className="text-gray-500 font-bold">
                Sector your Startup belong to*
              </label>
              <input
                type="text"
                name="sector"
                id="sector"
                value={values.sector}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.sector && touched.sector && (
                <p className="text-sm text-red-600">{errors.sector}</p>
              )}
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
                  type="radio"
                  value="yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="no" className="text-gray-500 font-bold mr-5 ml-8">
                  No
                </label>
                <input
                  name="student"
                  id="No"
                  type="radio"
                  value="No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.student && touched.student && (
                <p className="text-sm text-red-600">{errors.student}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-8 col-span-2 gap-0">
            <label htmlFor="description" className="text-gray-500 font-bold">
              Brief description of idea/product/service*
            </label>
            <textarea
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-200 h-44 sm:w-[100%] appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          {errors.description && touched.description && (
            <p className="text-sm text-red-600">{errors.description}</p>
          )}

          <div className="my-5" >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={values.checkbox}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="checkbox" className="pl-3">
              I hereby declare that i have read the{" "}
              <a href="#broucher" className="font-bold hover:underline">
                Brochure
              </a>{" "}
              and the details furnished above are correct to best of my
              Knowledge.
            </label>
            {errors.checkbox && touched.checkbox && (
              <p className="text-sm text-red-600">{errors.checkbox}</p>
            )}

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