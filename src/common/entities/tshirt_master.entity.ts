import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tshirt_master')
export class TshirtMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name'})
  name: string;
}