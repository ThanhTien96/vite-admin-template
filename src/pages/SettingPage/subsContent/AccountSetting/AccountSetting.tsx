import { Button, Space, Typography } from "antd";
import { SettingSection } from "pages/SettingPage/partials";
import React from "react";
const { Text, Link, Title } = Typography;

export interface IAccountSettingProps {}

const AccountSetting: React.FC<IAccountSettingProps> = () => {
  return (
    <Space direction="vertical" className="w-full">
      {/* user name */}
      <SettingSection title="Change your username">
        <Text>
          Changing your username can have <Link>unintended side effects</Link>
        </Text>
        <Button>Change username</Button>
        <Text type="secondary">
          Looking to manage account security setting? You can find them in the{" "}
          <Link>Password and authentication</Link> page
        </Text>
      </SettingSection>
      {/* export data */}
      <SettingSection title="Export account data" className="w-full mb-8">
        <Text>
          Export all repositories and profile metadata for{" "}
          <Text strong>@anonymous</Text>. Exports will be available for 7 days.
        </Text>
        <Button>Start export</Button>
      </SettingSection>
      {/* delete account */}
      <SettingSection
        title="Delete account"
        className="w-full"
      >
        <Text>
          You must remove yourself, transfer ownership, or delete these
          organizations before you can delete your user.
        </Text>
        <Button danger>Delete your account</Button>
      </SettingSection>
    </Space>
  );
};

export default AccountSetting;
