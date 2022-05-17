import { fromNullable, Option } from "fp-ts/Option";

function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
  return fromNullable(as.find(predicate));
}

export { find };
