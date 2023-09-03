import { Injectable, OnModuleInit } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class WebSocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:4040');
  }

  onModuleInit() {
    this.socketClient.on('connect', () => {
      this.registerConsumerEvents();
    });
  }

  private registerConsumerEvents() {
    this.socketClient.on('connect', () => {
      console.log('connected to Gateway');
    });
  }

  onMessage(message: string) {
    this.socketClient.emit('message', { data: message });
  }
}
