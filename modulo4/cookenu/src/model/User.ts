export enum USER_ROLES {
    ADMIN = 'admin',
    USER = 'user',
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ){}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getRole(): USER_ROLES {
        return this.role;
    }

    static toUserModel(user: any): User {
        return new User(
            user.id,
            user.name,
            user.email,
            user.password,
            user.role
        )
    }
}