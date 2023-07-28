import { Effect } from "effect";
import { Integer } from "type-fest/source/numeric";

export const add = <T extends number>(a: Integer<T>, b: Integer<T>): number =>
  Effect.runSync(Effect.succeed(a + b));
