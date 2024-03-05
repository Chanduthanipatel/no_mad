import { AppType } from './app_type.entity';
import { ParentAppType } from './parent_app_type.entity';
import { ProjectStatus } from './project_status.entity';
import { Projects } from './projects.entity';
import { SubAppType } from './sub_app_type.entity';
import { TshirtDetails } from './tshirt_details.entity';
import { TshirtMaster } from './tshirt_master.entity';
import { UserInfo } from './user_info.entity';

export * from './user_info.entity';
export * from './parent_app_type.entity';
export * from './app_type.entity';
export * from './sub_app_type.entity';
export * from './tshirt_master.entity';
export * from './tshirt_details.entity';
export * from './project_status.entity';
export * from './projects.entity';

export const entities = [
  UserInfo,
  ParentAppType,
  AppType,
  SubAppType,
  TshirtMaster,
  TshirtDetails,
  ProjectStatus,
  Projects,
];
