import * as Yup from "yup";

export const formschema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be of atleat 2 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Enter a valid Email ID")
    .required("Please enter your email"),
  ph_no: Yup.string()
    .min(10, "Phone number must be of 10 digits")
    .max(10, "Phone number must be of 10 digits")
    .required("Phone number is required"),
  place: Yup.string().required("Please enter your place"),
  startup_name: Yup.string().required("Please enter your name of your Startup"),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Website/LinkedIn is Requried"),

  sector: Yup.string().min(2).required("Please enter your sector"),
  description: Yup.string().min(20).required("Description is required"),
  student: Yup.string().required('This is required'),
  checkbox: Yup.bool().required("This has to be checked").oneOf([true]),
});