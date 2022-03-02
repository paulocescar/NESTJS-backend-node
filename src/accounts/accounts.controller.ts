import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseGuards, Headers } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AuthService } from 'src/auth/auth.service';
import { AccountDto } from './dto/account.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';


const saltOrRounds = 4;
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body() accountDto: AccountDto) {
    try{
      var accpassword = accountDto.password;
      // creating hash object 
      var hash = crypto.createHash('sha1');
      //passing the data to be hashed
      var data = hash.update(accountDto.password, 'utf-8');
      //Creating the hash in the required format
      var gen_hash = data.digest('hex');
      //Printing the output on the console
      accountDto.password = gen_hash

      
      const pass_hash = await bcrypt.hash(accpassword, saltOrRounds);
      accountDto.password_acc = pass_hash
      
      const acc = await this.accountsService.create(accountDto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Account created successfully',
        acc
      }

    }catch(error){
      return {
        statusCode: HttpStatus.CONFLICT,
        message: error.sqlMessage
      }
    }
  }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.accountsService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() accountDto: AccountDto) {
    return this.accountsService.update(+id, accountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }

}
