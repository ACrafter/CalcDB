/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
// eslint-disable-next-line max-len
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Eq extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    equation: string;

    @Column()
    ans: number;
}
