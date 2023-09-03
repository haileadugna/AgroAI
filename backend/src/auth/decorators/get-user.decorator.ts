import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserInterface } from 'src/user/interfaces/user.interface';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    const user: UserInterface = request.user; 

    return user ? user.username : null;
  },
);