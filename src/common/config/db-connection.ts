import { DataSource } from 'typeorm';
import { entities } from '../entities';

const dbType = process.env.DB_TYPE || '';
let dbConnection: any;
if (dbType == 'postgresql') {
  dbConnection = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || '',
    port: (process.env.DB_PORT as unknown as number) || 5432,
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    synchronize: false,
    entities: [...entities],
    // autoLoadEntities: true
  });
}

export const initiateDbConnection = () => {
  dbConnection
    .initialize()
    .then(() => {
      console.log('Database connected :  ', dbConnection.options.database);
      console.log('Database connection  has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Database initialization', err);
    });
};
