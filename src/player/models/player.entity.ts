import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsNumber, MaxLength, MinLength } from "class-validator";

@Entity()
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 15 })
  @MinLength(3)
  @MaxLength(15)
  @IsString()
  name: string;

  @Column({ type: "int" })
  @MinLength(1)
  @IsNumber()
  level: number;

  @Column({ type: "int" })
  @MinLength(1)
  @IsNumber()
  gold: number;

  constructor(name: string, level: number, gold: number) {
    this.name = name;
    this.level = level;
    this.gold = gold;
  }
}
