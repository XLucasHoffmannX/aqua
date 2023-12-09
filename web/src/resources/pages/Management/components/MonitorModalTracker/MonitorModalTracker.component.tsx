import { Modal, message } from 'antd';
import {
  Content,
  ContentDisplay,
  Display,
  Header,
  StatusConnect,
  TagStatus
} from './MonitorModalTracker.styles';
import { IMonitorModalTrackerProps } from './MonitorModalTracker.types';
import { Container } from '../../Mangement.styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { WebSocketContext } from 'app/context';
import { MessageDataType } from 'resources/pages/Monitor/Monitor.types';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { MessageData } from 'resources/pages/Monitor/components';

export function MonitorModalTracker({
  open,
  handleCloseModal
}: IMonitorModalTrackerProps): JSX.Element {
  const socket = useContext(WebSocketContext);
  const [messages, setMessages] = useState<MessageDataType[]>([]);
  const [connectedModule, setConnectedModule] = useState(false);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    socket.on('message', ({ data }) => {
      console.log(data);
      const dataRef: string = data.replace(/'/g, '"');

      const dataString: MessageDataType = JSON.parse(dataRef);

      setMessages(prev => [...prev, dataString]);
    });

    if (socket.disconnected) {
      setConnectedModule(false);
      message.warning('Aguardando conexão!');
      socket.off('message');
    } else {
      setConnectedModule(true);
      message.success('Conexão estabelecida!');
    }
  }, [socket.disconnected]);

  const scrollToBottom = () => {
    const messageContainer: any = messageContainerRef;
    if (messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <Modal
      title={'Monitor de recursos do Tracker'}
      width={550}
      maskClosable={false}
      open={open}
      onCancel={() => {
        handleCloseModal(false);
      }}
      footer={null}
      closeIcon={false}
    >
      <Container>
        <Content>
          <Display>
            <Header>
              Status:
              <StatusConnect>
                <TagStatus
                  icon={
                    connectedModule ? (
                      <CheckCircleOutlined />
                    ) : (
                      <SyncOutlined spin />
                    )
                  }
                  color={connectedModule ? 'success' : 'processing'}
                >
                  {connectedModule ? 'Conectado' : 'Sincronizando...'}
                </TagStatus>
              </StatusConnect>
            </Header>
            <ContentDisplay ref={messageContainerRef}>
              {messages.map((message, index) => (
                <MessageData
                  key={index}
                  message={message.message}
                  date={message.date}
                />
              ))}
            </ContentDisplay>
          </Display>
        </Content>
      </Container>
    </Modal>
  );
}
