import "reflect-metadata";
import { INJECTABLE } from "../../constants/app";

export class DependencyInjection {
  static get<T>(target: any): T {
    const isInjectable = Reflect.getMetadata(INJECTABLE, target);

    if (!isInjectable) {
      throw new Error("Target is not injectable");
    }

    const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];

    const instances = dependencies.map((dep: any) => {
      return DependencyInjection.get(dep);
    });
    return new target(...instances);
  }
}
