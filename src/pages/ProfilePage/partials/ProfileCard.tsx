import { Avatar, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import {
  EnvironmentOutlined,
  MailOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

const ProfileCard = () => {
  return (
    <Card
      className="relative border-none"
      cover={
        <Image
          style={{
            height: 100,
          }}
          alt="example"
          src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
        />
      }
      actions={[<EditOutlined key="edit" />]}
    >
      <Meta
        title="Anonymous"
        description="Software Engineer"
        className="!mb-4"
      />
      <Meta
        className="!mb-2"
        description={
          <span>
            <EnvironmentOutlined /> HCM city
          </span>
        }
      />
      <Meta
        className="!mb-2"
        description={
          <span>
            <MailOutlined /> anonymous@gmail.com
          </span>
        }
      />
      <Avatar
        className="absolute left-[1rem] top-[50px]"
        shape="square"
        size={64}
        icon={<UserOutlined />}
      />  22
    </Card>
  );
};

export default ProfileCard;
