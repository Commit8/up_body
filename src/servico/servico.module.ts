import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from './entities/servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servico]), CategoriaModule],
  providers: [ServicoService],
  controllers: [ServicoController],
  exports: [],
})
export class ServicoModule {}
