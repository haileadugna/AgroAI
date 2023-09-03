import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    return await this.authService.login(body);
  }

  @Post('signup')
  async signup(@Body() body) {
    return await this.authService.signup(body);
  }

  @Patch('change-password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Body() body) {
    return await this.authService.changePassword(body);
  }

  @Post('logout')
  async logout(@Body() body) {
    return await this.authService.logout();
  }
}