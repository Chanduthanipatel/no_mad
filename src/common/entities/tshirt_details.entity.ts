import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tshirt_details')
export class TshirtDetails {
  @PrimaryGeneratedColumn({ name: 'id'})
  id: number;

  @Column({ name: 'tshirt_master_id'})
  tshirtMasterId: number;

  @Column({ name: 'sub_app_id'})
  subAppId: number;

  @Column({ name: 'est_hours'})
  estHrs: number;
}