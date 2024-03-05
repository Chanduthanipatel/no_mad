import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_info')
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id'})
  userId: string;

  @Column({ name: 'password'})
  password: string;
  
}