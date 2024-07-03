import { Express, Router } from "express";
import "reflect-metadata";
import App from "../App";
import { Injectable } from "./Injectable";
import { DependencyInjection } from "../DI/DependencyInjection";
import {
  INSTANCE,
  METHODS_LIST,
  METHOD_METADATA,
  PATH_METADATA,
  ROUTER,
} from "../../constants/app";
import { METHODS } from "../../constants/methods";

export function Controller(prefix: string) {
  return function (target: any) {
    const router = Router();

    Reflect.defineMetadata(
      ROUTER,
      {
        router,
        prefix,
      },
      target
    );

    //instantiate
    const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];

    const instances = dependencies.map((dep: any) => {
      return DependencyInjection.get(dep);
    });
    const instance = new target(...instances);

    const methods = Reflect.getMetadata(METHODS_LIST, target.prototype) || [];

    for (const method of methods) {
      const pathMeta = Reflect.getMetadata(PATH_METADATA, method);
      const methodMeta = Reflect.getMetadata(METHOD_METADATA, method);

      router[methodMeta as METHODS](pathMeta, (req, res) =>
        instance[method.value.name](req, res)
      );
    }

    Reflect.defineMetadata(INSTANCE, instance, target);
  };
}
