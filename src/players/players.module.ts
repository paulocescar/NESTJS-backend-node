import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PlayerEntity } from './entities/player.entity';
import { PlayerItemEntity } from './entities/player_items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerSkillsEntity } from './entities/player_skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity, PlayerItemEntity, PlayerSkillsEntity])],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [PlayersService]
})
export class PlayersModule {}
