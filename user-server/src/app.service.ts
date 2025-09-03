import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private users: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  createUser(user:any) {
   const users=  this.users.push(user);
    return {  message: 'User created successfully', user  };
  }
  // Get all users method
  getUsers() {
    Logger.log('Getting all users'); // Log message for debugging
    // return this.users; //we need to add Exption Filter here
    //  If no users found, throw NotFoundException
    console.log('this.users', this.users)
    if (this.users.length === 0) {
      throw new RpcException({
        statusCode: 404,
        message: 'No users found',
        error: 'Not Found',
      });
    }
    return this.users;
  }
}
