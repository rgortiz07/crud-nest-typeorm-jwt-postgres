import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), AuthModule],
  controllers: [PersonsController],
  providers: [PersonsService],
  exports: [TypeOrmModule],
})
export class PersonsModule {}
