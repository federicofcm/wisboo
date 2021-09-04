import { object, string, ref, array } from "yup";

export const createFormSchema = object({
  body: object({
    name: string().required("Name is required"),
    description: string().required("Description is required"),
    questions: array().required("Questions are required"),
  }),
});