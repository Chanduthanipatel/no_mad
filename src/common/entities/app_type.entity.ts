import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('app_type')
export class AppType {
  @PrimaryGeneratedColumn({ name: 'id'})
  id: number;

  @Column({ name: 'parent_app_type_id'})
  parentAppTypeId: number;

  @Column({ name: 'app_name'})
  appName: string;
}