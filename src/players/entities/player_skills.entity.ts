import { Column, ManyToMany, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { PlayerEntity } from './player.entity'

@Entity('player_skills')
export class PlayerSkillsEntity {
    @PrimaryColumn()
    id: number;

    @ManyToMany(() => PlayerEntity)
    @Column(() => PlayerEntity)
    player_id: PlayerEntity;
    
    @Column({ nullable: false, default: 10 })
    skillid: number;

    @Column({ nullable: false, default: 10 })
    value: number;

    @Column({ nullable: false, default: 10 })
    count: number;
}

function BelongTo(arg0: (type: any) => typeof PlayerEntity) {
    throw new Error("Function not implemented.");
}
