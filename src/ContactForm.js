import React from "react";
import { Form, Input, Button, message } from "antd";

const ContactForm = () => {
  const onFinish = async (values) => {
    try {
      // Make an HTTP request to the server endpoint
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Check if the request was successful
      if (response.ok) {
        // Display a success message
        message.success("Form submitted successfully!");
      } else {
        // Display an error message
        message.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Display an error message
      message.error("Form submission failed");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form submission failed:", errorInfo);
  };

  return (
    <Form
      name="contact"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input placeholder="Your Email" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <Input.TextArea placeholder="Your Message" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
