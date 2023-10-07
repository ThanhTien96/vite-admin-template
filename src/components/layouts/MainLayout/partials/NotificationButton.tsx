import { Button } from 'antd'
import {BellOutlined} from '@ant-design/icons';

const NotificationButton = () => {
  return (
    <Button 
    type='text'
    shape='circle'
    className='h-[32px]'
    icon={<BellOutlined />}
    />
  )
}

export default NotificationButton