import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  Transport,
  ClientProxyFactory,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    });
  }

  public getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Micheal').toPromise();
  }
}
