import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestjs',
  password: 'password-pg',
  database: 'nestjs_db',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Migration 사용 시 false
});
