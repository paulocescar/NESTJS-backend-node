export interface AccountDto {
    id: number;

    metamask: string;
    
    name: string;

    password: string;
    password_acc: string;
    
    salt: string;

    premdays: number;

    lastday: number;

    email: string;

    key: string;
    
    blocked: number;
    
    warnings: number;
    
    group_id: number;
    
    premium_points: number;

    backup_points: number;

    guild_points: number;

    email_new: string;

    email_new_time: string;
    
    rlname: string;

    location: string;

    page_access: number;

    email_code: string;

    next_email: number;

    create_date: number;

    create_ip: number;

    last_post: number;

    flag: string;

    vip_time: number;

    vote: number;
}
