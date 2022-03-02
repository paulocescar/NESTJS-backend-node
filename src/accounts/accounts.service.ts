import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountDto } from './dto/account.dto';
import { AccountEntity } from './entities/account.entity';
import * as crypto from 'crypto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private accsRepository: Repository<AccountEntity>,
  ) {}
  
  async create(data: AccountDto) {
    const user = await this.accsRepository.create(data);
    await this.accsRepository.save(data);
    return user;
  }

  async findAll() {
    return await this.accsRepository.find();
  }

  async findOne(name: string) {
    return await this.accsRepository.findOne({
      where: { name: name}
    });
  }

  update(id: number, accountDto: AccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
