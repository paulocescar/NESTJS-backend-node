import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('accounts')
export class AccountEntity {
    @PrimaryGeneratedColumn()
    id: BigInt;

    @Column({ nullable: true })
    metamask: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    password: string;

    @Column()
    password_acc: string;

    @Column({ nullable: false })
    salt: string;

    @Column({ nullable: false, default: 0 })
    premdays: number;

    @Column({ nullable: false, default: 1641672847 })
    lastday: number;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false, default: 0 })
    key: string;
    
    @Column({ nullable: false, default: 0 })
    blocked: number;
    
    @Column({ nullable: false, default: 0 })
    warnings: number;
    
    @Column({ nullable: false, default: 1 })
    group_id: number;
    
    @Column({ nullable: false, default: 0 })
    premium_points: number;

    @Column({ nullable: false, default: 0})
    backup_points: number;

    @Column({ nullable: false, default: 0 })
    guild_points: number;

    @Column({ nullable: false })
    email_new: string;

    @Column({ nullable: false, default: 0 })
    email_new_time: string;
    
    @Column({ nullable: false })
    rlname: string;

    @Column({ nullable: false })
    location: string;

    @Column({ nullable: false, default: 0 })
    page_access: number;

    @Column({ nullable: false })
    email_code: string;

    @Column({ nullable: false, default: 0 })
    next_email: number;

    @Column({ nullable: false, default: 0 })
    create_date: number;

    @Column({ nullable: false, default: 0 })
    create_ip: number;

    @Column({ nullable: false, default: 0 })
    last_post: number;

    @Column({ nullable: false, default: "unknown" })
    flag: string;

    @Column({ nullable: false, default: 0 })
    vip_time: number;

    @Column({ nullable: false })
    vote: number;
}
