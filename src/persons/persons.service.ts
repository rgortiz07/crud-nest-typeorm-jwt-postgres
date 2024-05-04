import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { ActiveUserInterface } from '../common/interfaces/active-user.interface';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = this.personsRepository.create(createPersonDto);
    return this.personsRepository.save(person);
  }

  findAll() {
    return this.personsRepository.find();
  }

  findOne(id: number) {
    return this.personsRepository.findOneBy({ id });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    return await this.personsRepository.update(id, {
      ...updatePersonDto,
    });
    // return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
