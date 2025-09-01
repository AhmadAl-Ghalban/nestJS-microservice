import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { userCreatedEvent } from './user-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  getUsers() {
    const users = this.userService.send({ cmd: 'GET_ALL_USER' }, {});
    console.log('users', users);
    return users; // send method for Request-Response
  }
  //  this if use ti service a Event Pattern (Fire-and-Forget)
  // createUser(data: any) {
  //   this.userService.emit('CREATE_USER', new userCreatedEvent(data)); // emit method for Event Pattern (Fire-and-Forget)
  // }
  createUser(data: any) {
    console.log("🚀 ~ app.service.ts:23 ~ AppService ~ createUser ~ data:", data)
   return this.userService.send({cmd:"CREATE_USER"},data); // emit method for Event Pattern (Fire-and-Forget)
  }
}
