import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getAllUsers(): any {
    return this.appService.getUsers();
  }
  @Post('users')
  createUser(@Body() data:any): any {
    return this.appService.createUser(data);
  }
}
