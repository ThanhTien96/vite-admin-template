import {
    UserOutlined,
    FileImageOutlined,
    CalendarOutlined,
    BarChartOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";
  import { Card, Avatar, Input, Row, Col, Button } from "antd";
  
  const { TextArea } = Input;
  
const NewPostBox = () => {
  return (
    <Card size='small' className='border-none'>
      <div className='flex flex-row gap-2'>
        <div className='w-fit flex justify-end'>
          <Avatar shape='square' size={55} icon={<UserOutlined />} />
        </div>
        <div className='grow flex flex-col gap-4'>
          <TextArea
            placeholder='Tell your friends about your thoughts'
            rows={2}
          />
          <Row gutter={8}>
            <Col span={6}>
              <Button className='w-full' icon={<FileImageOutlined />}>
                Photo
              </Button>
            </Col>
            <Col span={6}>
              <Button className='w-full' icon={<VideoCameraOutlined />}>
                Video
              </Button>
            </Col>
            <Col span={6}>
              <Button className='w-full' icon={<BarChartOutlined />}>
                Poll
              </Button>
            </Col>
            <Col span={6}>
              <Button className='w-full' icon={<CalendarOutlined />}>
                Schedule
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}

export default NewPostBox