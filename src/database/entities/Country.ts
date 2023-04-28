import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ccode: string

    @Column()
    name: string

    @Column()
    ptbr: string

    @Column()
    usshort:string
}