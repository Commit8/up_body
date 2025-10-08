import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity({ name: 'tb_servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  plano: string;

  @IsNotEmpty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  inicio: Timestamp;

  @IsNotEmpty()
  @Column({ type: 'timestamp', nullable: false })
  termino: Timestamp;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.servico)
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.servico)
  categoria: Categoria;
}
