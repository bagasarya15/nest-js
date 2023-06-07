import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard, IsAdmin } from 'src/midleware/auth-guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(IsAdmin)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  // @UseGuards(IsAdmin)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('paginate')
  @UseGuards(IsAdmin)
  findPaginate() {
    return this.usersService.findPaginate();
  }

  @Get(':id')
  @UseGuards(IsAdmin)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(IsAdmin)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(IsAdmin)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
