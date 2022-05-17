import { Either, tryCatch } from "fp-ts/Either";

function parse(s: string): Either<Error, unknown> {
  return tryCatch(
    () => JSON.parse(s),
    (reason) => new Error(String(reason))
  );
}

export { parse };
