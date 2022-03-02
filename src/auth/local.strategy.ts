import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountDto } from 'src/accounts/dto/account.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(accountDto:AccountDto): Promise<any> {
    const acc = await this.authService.validateUser(accountDto);
    if (!acc) {
      throw new UnauthorizedException();
    }
    console.log("Acc ", acc)
    return acc;
  }
}