import { PageHeaderProps, PageHeader } from "@ant-design/pro-components";
import { Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const PagesHeader = (props: PageHeaderProps) => {
  return (
    <PageHeader
      {...(props as PageHeaderProps)}
      title={
        <Typography.Title level={4} className="mb-0">
          {props.title}
        </Typography.Title>
      }
      subTitle={
        <Typography.Text type="secondary">{props.subTitle}</Typography.Text>
      }
      backIcon={<ArrowLeftOutlined color={"#ffffff"} />}
    />
  );
};

export default PagesHeader;
