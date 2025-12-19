"use client";
import React, { useState } from "react";
import { Form, Input } from "antd";
import { contact } from "@/app/actions/actions";
import toast from "react-hot-toast";
import { ArrowRight } from "lucide-react";

function DynamicForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: unknown) => {
    console.log("Form Values: ", values);
    setLoading(true);
    const response = await contact(JSON.stringify(values));
    if (response.status === 200) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Form Errors: ", errorInfo);
  };
  return (
    <Form
      name="contact"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="space-y-8"
    >
      {/* Name */}
      <Form.Item
        label={
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">
            Your Name
          </span>
        }
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input
          placeholder="John Smith"
          size="large"
          className="h-14 w-full rounded-2xl px-5
                 bg-slate-900/30 border border-slate-700
                 text-white
                 placeholder:text-slate-500 placeholder:font-medium
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
      </Form.Item>

      {/* Email */}
      <Form.Item
        label={
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">
            Your Email
          </span>
        }
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          placeholder="work@company.com"
          size="large"
          className="h-14 w-full rounded-2xl px-5
                 bg-slate-900/30 border border-slate-700
                 text-white
                 placeholder:text-slate-500 placeholder:font-medium
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
      </Form.Item>

      {/* Message */}
      <Form.Item
        label={
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">
            Your Message
          </span>
        }
        name="message"
        rules={[{ required: true, message: "Please enter your message!" }]}
      >
        <Input.TextArea
          rows={4}
          placeholder="Write your message..."
          className="w-full rounded-2xl px-5 py-4
                 bg-slate-900/30 border border-slate-700
                 text-white
                 placeholder:text-slate-500 placeholder:font-medium
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
        />
      </Form.Item>

      {/* Button */}
      <Form.Item>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-6 rounded-2xl shadow-xl
                 bg-white text-black items-center
                 flex justify-center
                 text-xs
                 font-black uppercase tracking-[0.25em]
                 transition-all duration-500
                 hover:bg-blue-600 hover:text-white
                 disabled:opacity-60 disabled:cursor-not-allowed"
              
        >
          Request Proposal <span className="ml-1 md:ml-5"><ArrowRight className="w-6 h-6" /> </span>
        </button>
      </Form.Item>
    </Form>
  );
}

export default DynamicForm;
