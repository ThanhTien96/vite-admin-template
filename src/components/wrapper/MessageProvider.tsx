import React,  {useEffect} from "react";
import { useAppSelector } from "store";
import { message as _message } from "antd";

export interface IMessageProviderProps {
  children: React.ReactNode;
}

const MessageProvider = (props: IMessageProviderProps) => {
  const { message, status, logs } = useAppSelector((state) => state.app.alert);

  const messageOptions = {
    error: _message.error,
    warning: _message.warning,
    info: _message.info,
  };

  useEffect(() => {
    if(message !== "N/A") {
        messageOptions[status](message, 0.5);
    }
  }, [logs])
  
  return <>{props.children}</>;
};

export default MessageProvider;
