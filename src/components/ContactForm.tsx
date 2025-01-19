import React from "react";
import DynamicForm from "./Form";

function ContactForm() {
  return (
    <section className="py-20 bg-gray-100" id="contact">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Contact Us
      </h2>
      <div className="mt-10 max-w-xl mx-auto">
        <DynamicForm />
      </div>
    </section>
  );
}

export default ContactForm;
