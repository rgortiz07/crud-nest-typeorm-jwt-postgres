import { User } from 'src/users/entities/user.entity';
import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';

@Entity()
export class Person {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  apellido: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
