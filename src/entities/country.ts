import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  //   name!: string;
  //   code!: string;
  //   continent!: string;
}
