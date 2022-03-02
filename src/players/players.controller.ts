import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerDto } from './dto/player.dto';
import { PlayerItemsDto } from './dto/player_items.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() playerDto: PlayerDto,) {
    // return this.playersService.create(null, playerDto);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  
  @Get(':acc_id')
  find(@Param('acc_id') acc_id: string) {
    return this.playersService.find(+acc_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() playerDto: PlayerDto) {
    return this.playersService.update(+id, playerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
