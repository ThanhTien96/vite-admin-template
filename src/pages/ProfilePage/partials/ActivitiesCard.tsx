import { Card, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";


const ActivitiesCard = () => {
  return (
    <Card
      title='Recent activities'
      size='small'
      className='h-[300px] bg-inherit'
    >
      <Timeline
      items={[
        {children: "Create a services site 12-12-2023"},
        {children: "Solve initial network problems 12-12-2023"},
        {children: "Create a services site 12-12-2023"},
        {children: "Technical testing 12-12-2023", dot: <ClockCircleOutlined />, color: "red"},
        {children: "Create a services site 12-12-2023"},

      ]}
      />

    </Card>
  )
}

export default ActivitiesCard