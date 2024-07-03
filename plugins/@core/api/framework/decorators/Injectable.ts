import "reflect-metadata";
import { INJECTABLE } from "../../constants/app";

export const Injectable = () => (target: any) => {
  Reflect.defineMetadata(INJECTABLE, true, target);
};
