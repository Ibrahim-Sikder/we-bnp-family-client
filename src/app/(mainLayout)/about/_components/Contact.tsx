"use client";
import BNPForm from "@/components/Forms/Form";
import BNPInput from "@/components/Forms/Input";
import BNPTextArea from "@/components/Forms/TextArea";
import React from "react";

const Contact = () => {
  const handleSubmit = () => {

  };
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-900 pb-2">Contact Me</h2>
      <div className="p-2 lg:p-8 bg-white border rounded-lg shadow-lg">
        <BNPForm onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 lg:mb-6">
            <BNPInput name="contact" label="Name" size="medium" />
            <BNPInput name="contact" label="Email" size="medium"/>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>

            <BNPTextArea
              name="contact"
              sx={{ border: "2px solid gray", borderRadius: "2px" }}
              minRows={8}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              SEND MESSAGE &#x2192;
            </button>
          </div>
        </BNPForm>
      </div>
    </>
  );
};

export default Contact;
