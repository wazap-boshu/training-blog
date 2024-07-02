import {createHash} from 'crypto'

// sha256によるハッシュ化
export const encryptSha256 = (str: string) => {
    const hash = createHash('sha256');
    hash.update(str);
    return hash.digest('hex')
}