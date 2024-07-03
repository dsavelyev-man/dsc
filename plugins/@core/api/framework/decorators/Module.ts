import { Type } from "./../types/Type";
import "reflect-metadata";

export const Module =
  (metadata: { modules?: Type<any>[]; controllers?: Type<any>[] }) =>
  (target: any) => {
    for (const key of Object.keys(metadata)) {
      Reflect.defineMetadata(
        key,
        metadata[key as keyof typeof metadata],
        target
      );
    }
  };
