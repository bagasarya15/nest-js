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
import { ProdCatDtoService } from './prod-cat-dto.service';
import { CreateProdCatDtoDto } from './dto/create-prod-cat-dto.dto';
import { UpdateProdCatDtoDto } from './dto/update-prod-cat-dto.dto';
import { AuthGuard } from 'src/midleware/auth-guard';

@Controller('prod-cat-dto')
export class ProdCatDtoController {
  constructor(private readonly prodCatDtoService: ProdCatDtoService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createProdCatDtoDto: CreateProdCatDtoDto) {
    return this.prodCatDtoService.create(createProdCatDtoDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.prodCatDtoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.prodCatDtoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateProdCatDtoDto: UpdateProdCatDtoDto,
  ) {
    return this.prodCatDtoService.update(+id, updateProdCatDtoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.prodCatDtoService.remove(+id);
  }
}
