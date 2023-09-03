import { ForbiddenException, HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { compare } from 'bcrypt';


@Injectable()
export class AuthService {
  constructor (
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  async signup(userDto: CreateUserDto) {
    try {
      const user = await this.userService.create(userDto);
      return user;
    } catch (e) {
      throw e;
    }
  }

  @HttpCode(HttpStatus.CREATED)
  async login(loginData) {
    const { username, password } = loginData;
    const user = await this.userService.findOneByUsername(username);

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const match = await compare(password, user.password);

    if (!match) {

      throw new ForbiddenException('Access Denied');
    }

    const token = await this.getToken(username, user._id);

    return { user, ...token };
  }

  async changePassword(body) {
    let username = body.username;
    let currentPassword = body.currentPassword;
    let newPassword = body.newPassword;

    console.log(username, currentPassword, newPassword, 'body');
    const user = await this.userService.findOneByUsername(username);

    const match = await compare(currentPassword, user.password);
    
    if (!match) {
      throw new ForbiddenException('Access Denied');
    }
    const update = { password: newPassword };
    return await this.userService.update(user._id, update);
  }

  async getToken(username: string, id: string) {
    const payload = { username, sub: id };
    const token = await this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: 3600 * 24 * 7 * 2,
    });

    return { access_token: token };
  }
  
  async logout() {}
}
