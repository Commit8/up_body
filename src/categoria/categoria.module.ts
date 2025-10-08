import {Module} from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CategoriaService} from '.categoriaService';
import {CategoriaController} from './categoria.controller';
import {Categoria} from './entities/categoria.entity'


@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  export: [CategoriaService],
})
export class CategoriaModule {}