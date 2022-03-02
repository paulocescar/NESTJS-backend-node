import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerDto } from './dto/player.dto';
import { PlayerEntity } from './entities/player.entity';
import { PlayerSkillsEntity } from './entities/player_skills.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
    @InjectRepository(PlayerSkillsEntity)
    private playerSpellsRepository: Repository<PlayerSkillsEntity>
  ){
  }

  async create(acc_id: number, playerDto: PlayerDto) {
    playerDto.account_id = acc_id;
    const player = await this.playerRepository.create(playerDto);

    await this.playerRepository.save(player)
    return player;
  }

  findAll() {
    return `This action returns all players`;

  }
  
  async find(acc_id: number) {
    const players = await this.playerRepository.find({ account_id: acc_id});
    return players
  }

  async findOne(id: number) {
    const player = await this.playerRepository.findOne(id);
    return player
  }

  update(id: number, playerDto: PlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
