import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('parent_app_type')
export class ParentAppType {
  @PrimaryGeneratedColumn({ name: 'id'})
  id: number;

  @Column({ name: 'parent_app_name'})
  parentAppName: string;
}