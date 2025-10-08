import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servico } from '../../servico/entities/servico.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  // adicionar @ApiProperty / Swagger
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsEmail()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @IsNotEmpty()
  @MinLength(8)
  @Column({ length: 255, nullable: false })
  senha: string;

  @Column({ length: 5000 })
  foto: string;

  @IsNotEmpty()
  @Column({ type: 'bigint', nullable: false })
  peso: number;

  @IsNotEmpty()
  @Column({ type: 'bigint', nullable: false })
  altura: number;

  // Relacionamento de usuario com servico
  @OneToMany(() => Servico, (servico) => servico.usuario)
  servico: Servico[];
}
