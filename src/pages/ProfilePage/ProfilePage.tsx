import { Button, Calendar, Col, Row } from "antd";
import { PlainLayout } from "components/layouts/ChildLayout/PlainLayout";
import { COPY_RIGHT } from "constants";
import React from "react";
import { ActivitiesCard, CommunityBox, NewPostBox, PostInfoCard, ProfileCard, SkillBox } from "./partials";

export interface IProfilePageProps {}

const ProfilePage: React.FC<IProfilePageProps> = () => {
  return (
    <PlainLayout
      headerprops={{
        title: "My Profile",
      }}
      footerprops={{
        children: COPY_RIGHT,
        className: "text-center",
      }}
      className="bg-inherit px-4"
    >
      <Row gutter={[16, 8]}>
        {/* left column */}
        <Col span={6}>
          <div className='flex flex-col gap-8 sticky top-0'>
            <ProfileCard />
            <SkillBox />
            <CommunityBox />
          </div>
        </Col>
        {/* middle column */}
        <Col span={12}>
          <div className="flex flex-col gap-4">
            <NewPostBox />
            {/* post */}
            <PostInfoCard />
            <PostInfoCard />
            <Button className="w-full" type="dashed">read more</Button>
          </div>
        </Col>
        {/* right column */}
        <Col span={6}>
          <div className="flex flex-col gap-8 sticky top-0">
            <Calendar fullscreen={false} />
            <ActivitiesCard />
          </div>
        </Col>
      </Row>
    </PlainLayout>
  );
};

export default ProfilePage;
