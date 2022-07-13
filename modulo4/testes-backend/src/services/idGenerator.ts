import { v4 } from "uuid";
import { GeraId } from "..";

export class IdGenerator implements GeraId{
  public generate(): string {
    return v4();
  }
}

