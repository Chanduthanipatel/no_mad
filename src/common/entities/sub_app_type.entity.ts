import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('sub_app_type')
export class SubAppType{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:"app_type_id"})
    appTypeId: number;

    @Column({name:"type_name"})
    typeName: string;


}