import jwt from 'jsonwebtoken';

export default class token {
    private static secret: string = 'finalm8';

    static createToken(data: any) {
        return jwt.sign(data, this.secret);
    }

    static verifyToken(token: string) {
        return jwt.verify(token, this.secret);
    }
}
