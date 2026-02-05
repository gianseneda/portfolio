import { useState } from "react";

import emailjs from "@emailjs/browser";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<{
    type: "success" | "error";
  } | null>(null);

  const submit = async (_url: string | null, data: any) => {
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.firstName,
          from_email: data.email,
          message: data.comment,
          enquiry_type: data.type,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setResponse({
        type: "success",
      });
    } catch (error) {
      setResponse({
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
