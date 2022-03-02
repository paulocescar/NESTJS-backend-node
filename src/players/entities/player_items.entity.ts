import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('player_items')
export class PlayerItemEntity {
    @PrimaryGeneratedColumn()
    player_id: number;

    @Column({ nullable: false, default: 0 })
    pid: number;

    @Column({ nullable: false, default: 0 })
    sid: number;

    @Column({ nullable: false, default: 0 })
    itemtype: number;

    @Column({ nullable: false, default: 0 })
    count: number;
}
