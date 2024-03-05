import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('projects')
export class Projects {
  @PrimaryGeneratedColumn({ name: 'id'})
  id: number;

  @Column({ name: 'project_name'})
  projectName: string;

  @Column({ name: 'project_type'})
  projectType: string;

  @Column({ name: 'project_industry'})
  projectIndustry: string;

  @Column({ name: 'project_size'})
  projectSize: string;

  @Column({ name: 'project_description'})
  projectDescription: string;

  @Column({ name: 'project_version'})
  projectVersion: string;

  @Column({ name: 'project_parent_app_id'})
  projectParentAppId: number;

  @Column({ name: 'project_app_type_id'})
  projectAppTypeId: number;

  @Column({ name: 'created_at'})
  createdAt: Date;

  @Column({ name: 'status_id'})
  statusId: number;

  constructor(projectName: string,
    projectType: string,
    projectIndustry: string,
    projectSize: string,
    projectDescription: string,
    projectVersion: string,
    projectParentAppId: number,
    projectAppTypeId: number,
    createdAt: Date,
    statusId: number
    ){
      this.projectName = projectName;
      this.projectType = projectType;
      this.projectIndustry = projectIndustry;
      this.projectSize = projectSize;
      this.projectDescription = projectDescription;
      this.projectVersion = projectVersion;
      this.projectParentAppId = projectParentAppId;
      this.projectAppTypeId = projectAppTypeId;
      this.createdAt = createdAt;
      this.statusId = statusId;
  }
}