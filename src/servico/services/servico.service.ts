import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { Servico } from '../entities/servico.entity';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
    private categoriaService: CategoriaService,
  ) {}
  async findAll(): Promise<Servico[]> {
    return await this.servicoRepository.find({
      relations: {
        categoria: true,
        usuario: true,
      },
    });
  }
  async findById(id: number): Promise<Servico> {
    const servico = await this.servicoRepository.findOne({
      where: {
        id,
      },
    relations: {
        categoria: true,
        usuario: true,
      },
    });

    if (!servico)
      throw new HttpException('Servico não encontrada!', HttpStatus.NOT_FOUND);

    return servico;
  }
  async findByAllPlano(plano: string): Promise<Servico[]> {
    return await this.servicoRepository.find({
      where: {
        plano: ILike(`%${plano}%`),
      },
      relations: {
        categoria: true,
        usuario: true,
      },
    });
  }
  async create(servico: Servico): Promise<Servico> {
    await this.categoriaService.findById(servico.categoria.id);

    return await this.servicoRepository.save(servico);
  }

  async update(servico: Servico): Promise<Servico> {
    await this.findById(servico.id);

    await this.categoriaService.findById(servico.categoria.id);

    return await this.servicoRepository.save(servico);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.servicoRepository.delete(id);
  }
}
