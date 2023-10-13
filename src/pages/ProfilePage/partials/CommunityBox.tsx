import { Typography, Button, List, Avatar, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchIcon } from "lib/icons";

const { Title } = Typography;

const CommunityBox = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
            <Title level={4}>Groups</Title>
            <Button icon={<SearchIcon />} />
        </div>
        {/* card list */}
        <Card 
            size="small"
            className="bg-inherit h-[220px] overflow-auto border-none"
        >   
            <List 
                size="small"
                itemLayout="horizontal"
                dataSource={[
                    {title: "Meta Design 1"},
                    {title: "Meta Design 2"},
                    {title: "Meta Design 3"},
                    {title: "Meta Design 4"},
                    {title: "Meta Design 5"},
                ]}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta 
                            avatar={
                                <Avatar 
                                shape="square"
                                size={45}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyk3LE1iKq8HyVh3AU7qAOUFzvijjJXoluYKJf1NFk5yj1KdXluRuW57gEda2M6F_Vf4&usqp=CAU"
                                />
                            }
                            title={<a href='https://ant.design'>{item.title}</a>}
                            description="Meta Design"
                        />
                    </List.Item>
                )}
            />
        </Card>
    </div>
  )
}

export default CommunityBox