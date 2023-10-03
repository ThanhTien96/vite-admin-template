import React from 'react'
import { Spin, Layout } from "antd";
const { Content } = Layout;


const LoadingPage: React.FC = () => {
  return (
    <Layout className='flex w-full h-full items-center justify-center'>
      <Content className='flex items-center justify-center'>
        <Spin />
      </Content>
    </Layout>
  )
}

export default LoadingPage