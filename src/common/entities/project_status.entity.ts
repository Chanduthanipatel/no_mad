import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('project_status')
export class ProjectStatus {
  @PrimaryColumn({ name: 'id'})
  id: number;

  @Column({ name: 'name'})
  name: string;
}