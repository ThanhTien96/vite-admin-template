import React from 'react'
import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { useNavigate } from 'react-router';

export type ErrorPageProps = {
    status: ResultStatusType;
    title: string;
    subTitle: string;
}

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const navigate = useNavigate();
    const {title, subTitle, status} = props
  return (
    <Result 
        status={status}
        title={title}
        subTitle={subTitle}
        extra={<Button onClick={() => navigate('home')} type='primary'>Back Home</Button>}
    />
  )
}

export default ErrorPage