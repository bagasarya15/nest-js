import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { AuthGuard } from 'src/midleware/auth-guard';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Get('find-all')
  @UseGuards(AuthGuard)
  FindAllCategory() {
    return this.productCategoryService.GetAllCategory();
  }

  @Get('find-by/:id')
  @UseGuards(AuthGuard)
  FindCategoryById(@Param('id') id: string): any {
    return this.productCategoryService.GetCategoryById(+id);
  }

  @Post('create')
  @UseGuards(AuthGuard)
  PostCategory(@Body() dataBody: string): any {
    return this.productCategoryService.CreateCategory(dataBody);
  }

  @Put('update/:id')
  @UseGuards(AuthGuard)
  PutCategory(@Param('id') id: string, @Body() dataBody: string): any {
    return this.productCategoryService.UpdateCategory(+id, dataBody);
  }

  @Delete('delete/:id')
  @UseGuards(AuthGuard)
  DeleteCategory(@Param('id') id: string): any {
    return this.productCategoryService.DeleteCategory(+id);
  }
}
