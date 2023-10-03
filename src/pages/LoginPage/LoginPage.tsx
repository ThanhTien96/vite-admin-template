import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Layout,
  Typography,
  Input,
  Button,
  Form,
  Tabs,
  Space,
  Checkbox,
  Divider,
} from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Text, Title, Link } = Typography;

function DefaultLoginForm() {
  const navigate = useNavigate();
  const handleLogin = () => navigate("home");

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true, username: "admin", password: "admin" }}
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className='login-form-forgot' href=''>
          Forgot password
        </Link>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType='submit'
          className='login-form-butto w-full'
          onClick={handleLogin}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export interface LoginPageProps {}

const Page: React.FC<LoginPageProps> = (props) => {
  return (
    <Layout className='flex items-center h-screen w-full justify-center'>
      <Content className='flex items-center'>
        <Space direction='vertical'>
          <Title level={2} className='text-center'>
            Project Name
          </Title>
          <Divider className='my-0'>
            <Text type='secondary' className='text-center'>
              The world's largest event tracking platform
            </Text>
          </Divider>
          <Tabs
            defaultActiveKey='1'
            centered
            className='h-[280px] w-[400px]'
            items={[
              {
                key: "1",
                label: (
                  <span>
                    <LoginOutlined />
                    Default
                  </span>
                ),
                children: <DefaultLoginForm />,
              },
              {
                key: "2",
                label: (
                  <span>
                    <GithubOutlined />
                    Github
                  </span>
                ),
                children: <>hello</>,
              },
            ]}
          />
          <Divider className='my-0'>
            <Text type='secondary' className='text-center'>
              Our contacts
            </Text>
          </Divider>
          <div className='flex flex-row items-center gap-4 justify-center'>
            <Button shape='circle' icon={<GithubOutlined />} />
            <Button shape='circle' icon={<TwitterOutlined />} />
            <Button shape='circle' icon={<FacebookOutlined />} />
          </div>
        </Space>
      </Content>
    </Layout>
  );
};

export default Page;
