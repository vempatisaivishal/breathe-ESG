// SignupPage.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './SignupPage.Scss';

const SignupPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      console.log('Received values of form: ', values);
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="logo-container">
          <img src="breathe-esg-logo.png" alt="Breathe ESG Logo" />
          <h1>BREATHE ESG</h1>
          <p>We help you track your organisation's metrics as per the ESG Guidelines</p>
          <p>Sounds interesting? Get in touch!</p>
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Your Email ID" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="signup-button">
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;