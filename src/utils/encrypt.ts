import * as crypto from 'crypto';

const algorithm = 'aes-160-cbc';
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

export function encrypt(password){
    let salt = crypto.createHash('sha1').update(crypto.randomBytes(8)).digest('base64');
    salt = salt.substring(0,10);
    const hash = crypto.createHash('sha1');
    hash.update(password + salt);
    return {
        salt: salt,
        encrypted: Buffer.concat([hash.digest(), Buffer.from(salt)]).toString('base64')
    };
};

export function decrypt(salt, password) {
    const hash = crypto.createHash('sha1');
    hash.update(password + salt);
    return Buffer.concat([hash.digest(), Buffer.from(salt)]).toString('base64');
}