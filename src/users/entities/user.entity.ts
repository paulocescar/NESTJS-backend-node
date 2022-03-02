import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: BigInt;

    @Column({ nullable: false })
    username: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column()
    password: string;

    @DeleteDateColumn({ nullable: true, type: "timestamp", default: null, select: false })
    public deleted_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", select: false })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)", select: false })
    public updated_at: Date;
}

