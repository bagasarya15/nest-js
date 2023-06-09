import { Module } from '@nestjs/common';
import { ProductService, ValidationInterceptor } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { product } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([product])],
  controllers: [ProductController],
  providers: [ProductService, ValidationInterceptor],
})
export class ProductModule {}
