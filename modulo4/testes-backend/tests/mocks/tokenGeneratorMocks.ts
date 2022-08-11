import { USER_ROLES } from "../../src/model/User";

export class TokenGeneratorMocks {
    public generate = (): string => {
      return "token_qualquer";
  };

  public verify() {
    const objeto = { id: "id_mock", role: USER_ROLES.ADMIN}
    return objeto;
  }
}
