import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './LoginPage.Scss';

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      console.log('Received values of form: ', values);
      navigate('/main');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1>Login</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">Log in</Button>
          </Form.Item>
        </Form>
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
