import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { AccountDto } from 'src/accounts/dto/account.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Any } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
      private accountsService: AccountsService,
      private readonly jwtService: JwtService) {}

  async validateUser(accountDto:AccountDto): Promise<any> {
    const acc = await this.accountsService.findOne(accountDto.name);
    await bcrypt.compare(accountDto.password_acc, acc.password_acc).then(res =>{
      const { password_acc, password, ...result } = acc;
      
      return result;
    })
    return null;
  }
  
  async login(accountDto:AccountDto) {
    const acc = await this.accountsService.findOne(accountDto.name);
    return await bcrypt.compare(accountDto.password_acc, acc.password_acc).then(res =>{
      const payload = { metamask: acc.metamask, sub: acc.name };
      const token = this.jwtService.sign({"userId":acc.id,"payload":payload});
      return {
        "error": 0, "message":"Access Granted!", "token": token,
      };
    }).catch(err => {
      return {"error": 1, "message":err}
    })
  }

  async extractToken(token: string){
    const decoded = await this.jwtService.decode(token)
    return decoded;
  }
}