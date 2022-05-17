import { Option, none, some } from "fp-ts/Option";

function findIndex(as: Array<A>, predicate: (a: A) => boolean) {
  const index = as.findIndex(predicate);
  return index === -1 ? none : some(index);
}

export { findIndex };
