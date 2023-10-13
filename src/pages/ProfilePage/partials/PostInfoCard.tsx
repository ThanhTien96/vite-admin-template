import { Card, Avatar, Typography, Button, Image, Input } from "antd";
import {
  UserOutlined,
  MoreOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
  FileImageOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const PostInfoCard = () => {
  return (
    <Card
      size='small'
      className='border-none'
      extra={<Button type='text' shape='circle' icon={<MoreOutlined />} />}
      title={
        <div className='flex flex-row gap-4 py-2'>
          <Avatar shape='square' size={55} icon={<UserOutlined />} />
          <div className='flex flex-col'>
            <Text type='secondary'>@anonymous</Text>
            <Title className='!my-0' level={4}>
              Anonymous
            </Title>
          </div>
        </div>
      }
    >
      <div className='flex flex-col gap-4'>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          est mattis erat dapibus tempor vitae in lectus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Pellentesque euismod volutpat
          molestie. Cras euismod dapibus ...
        </Text>
        <Image
          preview={false}
          className='rounded-lg'
          src='https://img.freepik.com/premium-photo/beautiful-lake-natural-landscape-photography-wallpaper-relax-joyful-illustration_911849-275007.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=ais'
        />
        <div className='flex flex-row gap-4'>
          <Button type='text' shape='circle' icon={<HeartOutlined />} />
          <Button type='text' shape='circle' icon={<MessageOutlined />} />
          <Button type='text' shape='circle' icon={<ShareAltOutlined />} />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Avatar shape='square' size={32} icon={<UserOutlined />} />
          <Input
            placeholder='Send your message'
            suffix={
              <Button type='text' size='small' icon={<FileImageOutlined />} />
            }
          />
        </div>
      </div>
    </Card>
  );
};

export default PostInfoCard;
