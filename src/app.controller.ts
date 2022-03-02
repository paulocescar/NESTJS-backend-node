import { Controller, Get, Request, Post, UseGuards, Body, Param, Headers } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalStrategy } from './auth/local.strategy';
import { AuthService } from './auth/auth.service';
import { AccountsService } from './accounts/accounts.service';
import { PlayersService } from './players/players.service';
import { AccountDto } from './accounts/dto/account.dto';
import { PlayerDto } from './players/dto/player.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService,
     private accountsService: AccountsService,
     private playersService: PlayersService){}

  @UseGuards(LocalStrategy)
  @Post('auth/login')
  async login(@Body() accountDto: AccountDto) {
    return this.authService.login(accountDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Headers() headers) {
    const acc_id = await this.authService.extractToken(headers.authorization.replace('Bearer ','')).then(res => {
      return res
    });
    const players = await this.playersService.find(acc_id["userId"])
    return players;
  }
  
  @UseGuards(JwtAuthGuard)
  @Post('/create_player')
  async create(@Body() playerDto: PlayerDto,@Headers() headers) {
    
    const acc_id = await this.authService.extractToken(headers.authorization.replace('Bearer ','')).then(res => {
      return res
    });

    return this.playersService.create(acc_id["userId"], playerDto);
  }

  
  @UseGuards(JwtAuthGuard)
  @Get('/load_players')
  async loadPlayers(@Headers() headers) {
    
    const acc_id = await this.authService.extractToken(headers.authorization.replace('Bearer ','')).then(res => {
      return res
    });

    return this.playersService.find(acc_id["userId"]);
  }
}
