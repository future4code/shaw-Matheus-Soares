import * as jwt from "jsonwebtoken";

const expiresIn = "1min";
const generateToken(input: AuthenticationData): string {
    const token jwt.sign(
        {id: input.id},
        process.env.jwt_key as string,
        {expiresIn}
    );
    return token;
}

type AuthenticationData = {
    id: string;
}