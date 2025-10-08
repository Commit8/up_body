import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servico } from '../../servico/entities/servico.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  usuario: string;

  @IsNotEmpty()
  @MinLength(8)
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 5000 })
  @ApiProperty()
  foto: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  @ApiProperty()
  peso: number;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 4, scale: 2, nullable: true })
  @ApiProperty()
  altura: number;

  // Relacionamento de usuario com servico
  @ApiProperty()
  @OneToMany(() => Servico, (servico) => servico.usuario)
  servico: Servico[];
}
