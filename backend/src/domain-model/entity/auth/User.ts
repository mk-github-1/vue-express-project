import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @Entity()
export interface User {
  // @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  firstName: string;

  // @Column()
  lastName: string;

  // @Column()
  age: number;
}
