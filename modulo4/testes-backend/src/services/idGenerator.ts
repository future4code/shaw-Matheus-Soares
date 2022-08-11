import { v4 } from "uuid";
import { GeraId } from "../explicacao";

export class IdGenerator implements GeraId{
  public generate(): string {
    return v4();
  }
}

