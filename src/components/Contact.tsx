import { useEffect } from "react";
import Image from "next/image";

import {
  addToast,
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useSubmit from "../hooks/useSubmit";

export const Contact = () => {
  const { response, isLoading, submit } = useSubmit();

  const {
    values,
    getFieldProps,
    touched,
    errors,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => submit(null, values),
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      type: Yup.string().required("Please select a type"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (!response) return;
    if (response.type === "success") {
      addToast({
        title: `Thank you, ${values.firstName}. Your email has been sent and soon I will get back to you.`,
        color: "success",
      });
      resetForm();
      return;
    } else {
      addToast({
        title: "Something went wrong, please try again later!",
        color: "danger",
      });
      resetForm();
    }
  }, [response, values.firstName, resetForm]);

  return (
    <div
      className="relative flex flex-row min-h-[420px] overflow-hidden bg-neutral-900 justify-center"
      id="contact-section"
    >
      <Image
        src="./assets/backgrounds/gradients-desktop.png"
        alt="Background"
        fill
        priority={false}
        className="object-cover"
      />
      <Form
        className="w-full px-2 max-w-lg flex flex-col items-center justify-center border"
        onSubmit={handleSubmit}
      >
        <Input
          isRequired
          placeholder="Enter your first name"
          {...getFieldProps("firstName")}
          isInvalid={touched.firstName && !!errors.firstName}
          errorMessage={touched.firstName && errors.firstName}
        />
        <Input
          isRequired
          placeholder="Enter your email"
          {...getFieldProps("email")}
          isInvalid={touched.email && !!errors.email}
          errorMessage={touched.email && errors.email}
        />
        <Select
          placeholder="Select enquiry type"
          selectedKeys={values.type ? [values.type] : []}
          onSelectionChange={(keys) =>
            setFieldValue("type", Array.from(keys)[0])
          }
          isInvalid={touched.type && !!errors.type}
          errorMessage={touched.type && errors.type}
        >
          <SelectItem className="text-stone-800" key="freelance">
            Freelance project proposal
          </SelectItem>
          <SelectItem className="text-stone-800" key="oss">
            Job offer
          </SelectItem>
          <SelectItem className="text-stone-800" key="other">
            Other
          </SelectItem>
        </Select>
        <Textarea
          radius="lg"
          label="Content"
          placeholder="Enter the content"
          {...getFieldProps("comment")}
          isInvalid={touched.comment && !!errors.comment}
          errorMessage={touched.comment && errors.comment}
        />
        <Button
          type="submit"
          size="lg"
          radius="full"
          isLoading={isLoading}
          isDisabled={isLoading}
          className="px-8 py-2 mt-4 mx-auto bg-indigo-600 text-stone-200 shadow-lg cursor-pointer"
        >
          Send message
        </Button>
      </Form>
    </div>
  );
};
