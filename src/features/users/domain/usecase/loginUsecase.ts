import Usecase from '../../../../core/domain/contracts/usecase';
import NotFoundError from '../../../../core/domain/errors/notFoundError';
import token from '../../../../core/infra/services/auth/jwt';
import UsersRepository from '../../infra/repositories/usersRepository';
import senhaIncorreta from '../errors/senhaIncorreta';
import LoginParams from '../model/loginParams';

export default class LoginUsecase implements Usecase {
    constructor(private repository: UsersRepository) {}

    async run(data: LoginParams) {
        const users = await this.repository.findUser(data.name);

        if (!users[0]) throw new NotFoundError('User');
        if (users[0].password !== data.password) throw new senhaIncorreta();

        let tk = token.createToken(users[0].uid);

        let userId = { uid: users[0].uid, access_token: tk };

        return userId;
    }
}
