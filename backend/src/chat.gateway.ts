import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
@WebSocketGateway(81, {
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    this.server.emit('message', message);
  }
}
