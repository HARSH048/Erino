import { AbstractEntity } from "./abstract.entity";

const { Column, Entity} = require ("typeorm")

@Entity({ name: 'contacts' })
export class ContactEntity extends AbstractEntity {
    @Column({ name: 'firstName', nullable: false })
    firstName: string

    @Column({ name: 'lastName', nullable: true })
    lastName: string

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'phoneNumber', nullable: false, unique: true })
    phoneNumber: string;

    @Column({ name: 'company', nullable: false})
    company: string;

    @Column({ name: 'jobTitle', nullable: false})
    jobTitle: string;
}