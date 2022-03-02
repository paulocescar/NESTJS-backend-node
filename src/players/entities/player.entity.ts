import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('players')
export class PlayerEntity {
    @PrimaryGeneratedColumn()
    id: BigInt;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, default: 0 })
    world_id: number;

    @Column({ nullable: false, default: 1 })
    group_id: number;

    @Column({ nullable: false, default: 0 })
    account_id: number;

    @Column({ nullable: false, default: 1 })
    level: number;

    @Column({ nullable: false, default: 1 })
    vocation: number;

    @Column({ nullable: false, default: 150 })
    health: number;
    
    @Column({ nullable: false, default: 150 })
    healthmax: number;
    
    @Column({ nullable: false, default: 0 })
    experience: number;
    
    @Column({ nullable: false, default: 0 })
    lookbody: number;
    
    @Column({ nullable: false, default: 0 })
    lookfeet: number;

    @Column({ nullable: false, default: 0})
    lookhead: number;

    @Column({ nullable: false, default: 0 })
    looklegs: number;

    @Column({ nullable: false, default: 136 })
    looktype: number;

    @Column({ nullable: false, default: 0 })
    lookaddons: number;
    
    @Column({ nullable: false, default: 0 })
    maglevel: number;

    @Column({ nullable: false, default: 0 })
    mana: number;

    @Column({ nullable: false, default: 0 })
    manamax: number;

    @Column({ nullable: false, default: 0 })
    manaspent: number;

    @Column({ nullable: false, default: 0 })
    soul: number;

    @Column({ nullable: false, default: 0 })
    town_id: number;

    @Column({ nullable: false, default: 0 })
    posx: number;

    @Column({ nullable: false, default: 0 })
    posy: number;

    @Column({ nullable: false, default: 0 })
    posz: number;

    @Column({ nullable: false, default: 0 })
    cap: number;

    @Column({ nullable: false, default: 0 })
    sex: number;
    
    @Column({ nullable: false, default: 0 })
    lastlogin: number;

    @Column({ nullable: false, default: 0 })
    lastip: number;

    @Column({ nullable: false, default: 1 })
    save: number;

    @Column({ nullable: false, default: 0 })
    skull: number;

    @Column({ nullable: false, default: 0 })
    skulltime: number;

    @Column({ nullable: false, default: 0 })
    rank_id: number;

    @Column({ nullable: false })
    guildnick: string;
    
    @Column({ nullable: false, default: 0 })
    lastlogout: number;
    
    @Column({ nullable: false, default: 0 })
    blessings: number;
    
    @Column({ nullable: false, default: 0 })
    balance: number;

    @Column({ nullable: false, default: 151200000 })
    stamina: number;
    
    @Column({ nullable: false, default: 2 })
    direction: number;
    
    @Column({ nullable: false, default: 100 })
    loss_experience: number;
    
    @Column({ nullable: false, default: 100 })
    loss_mana: number;
    
    @Column({ nullable: false, default: 100 })
    loss_skills: number;
    
    @Column({ nullable: false, default: 100 })
    loss_containers: number;
    
    @Column({ nullable: false, default: 100 })
    loss_items: number;
    
    @Column({ nullable: false, default: 0 })
    premend: number;

    @Column({ nullable: false, default: 0 })
    online: number;

    @Column({ nullable: false, default: 0 })
    marriage: number;

    @Column({ nullable: false, default: 0 })
    promotion: number;

    @Column({ nullable: false, default: 0 })
    deleted: number;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false, default: 0 })
    comment: string;

    @Column({ nullable: false, default: 0 })
    create_ip: number;

    @Column({ nullable: false, default: 0 })
    create_date: number;

    @Column({ nullable: false, default: 0 })
    hide_char: number;

    @Column({ nullable: false })
    signature: string;

    @Column({ nullable: false, default: 0 })
    broadcasting: number;

    @Column({ nullable: false, default: 0 })
    viewers: number;

    @Column({ nullable: true, default: 43200 })
    offlinetraining_time: number;

    @Column({ nullable: true, default: -1 })
    offlinetraining_skill: number;

    @Column({ nullable: true, default: 0 })
    nick_verify: number;

    @Column({ nullable: true, default: null })
    old_name: string;

    @Column({ nullable: true, default: 0 })
    show_outfit: number;

    @Column({ nullable: true, default: 0 })
    show_eq: number;

    @Column({ nullable: true, default: 0 })
    show_bars: number;

    @Column({ nullable: true, default: 0 })
    show_skills: number;

    @Column({ nullable: true, default: 0 })
    show_quests: number;

    @Column({ nullable: true, default: 0 })
    stars: number;

    @Column({ nullable: true, default: 0 })
    ip: string;

    @Column({ nullable: true, default: 0 })
    cast: number;

    @Column({ nullable: true, default: 0 })
    castViewers: number;

    @Column({ nullable: true, default: null })
    castDescription: string;
    
    @Column({ nullable: true, default: 0 })
    rep : number;
}
