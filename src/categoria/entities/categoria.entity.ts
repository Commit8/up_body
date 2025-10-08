import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servico } from '../../servico/entities/servico.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  //Adicionar ApiProperty
  @PrimaryGeneratedColumn()
  id: number;

  //Adicionar ApiProperty
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  tipo: string;

  //Adicionar ApiProperty
  @OneToMany(() => Servico, (servico) => servico.categoria)
  servico: Servico[];
}
