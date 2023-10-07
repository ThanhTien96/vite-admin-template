import { Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons';

const QuestionButton = () => {
  return (
    <Button 
    className='h-[32px]'
    shape='circle'
    type='text'
    icon={<QuestionCircleOutlined />}
    />
  )
}

export default QuestionButton