"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { contact } from "@/app/api/contact/route";
import toast from "react-hot-toast";

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
      className="flex flex-col gap-6"
    >
      {/* Name Field */}
      <Form.Item
        label="Your Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>

      {/* Email Field */}
      <Form.Item
        label="Your Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Your Email" />
      </Form.Item>

      {/* Message Field */}
      <Form.Item
        label="Your Message"
        name="message"
        rules={[{ required: true, message: "Please enter your message!" }]}
      >
        <Input.TextArea placeholder="Your Message" rows={4} />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          loading={loading}
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
}

export default DynamicForm;
