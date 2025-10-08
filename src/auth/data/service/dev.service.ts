import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Categoria } from '../../../categoria/entities/categoria.entity';
import { Servico } from '../../../servico/entities/servico.entity';
import { Usuario } from '../../../usuario/entities/usuario.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_up_body',
      entities: [Categoria, Servico, Usuario],
      synchronize: true,
    };
  }
}
