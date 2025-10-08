import { Module } from '@nestjs/common';
import { Servico } from './servico/entities/servico.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { ServicoModule } from './servico/servico.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_up_body',
      entities: [Servico, Categoria, Usuario],
      synchronize: true,
    }),
    ServicoModule,
    CategoriaModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
