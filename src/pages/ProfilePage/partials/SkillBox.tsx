import { Typography, Space, Tag } from "antd";

const { Title } = Typography;

const SkillBox = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Title level={4}>Skills</Title>
      <Space wrap>
        <Tag>Jenkin</Tag>
        <Tag>ReactJS</Tag>
        <Tag>Golang</Tag>
        <Tag>Python</Tag>
        <Tag>C#</Tag>
        <Tag>Java</Tag>
      </Space>
    </div>
  )
}

export default SkillBox